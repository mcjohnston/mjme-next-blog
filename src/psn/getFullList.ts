import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

import fs from "fs";

import {
  exchangeAccessCodeForAuthTokens,
  exchangeRefreshTokenForAuthTokens,
  exchangeNpssoForAccessCode,
  getTitleTrophies,
  getUserTitles,
  getUserTrophiesEarnedForTitle,
  getRecentlyPlayedGames,
  TrophyRarity,
  type Trophy,
  getProfileFromAccountId,
} from "psn-api";

async function main() {
  try {
    const myToken = process.env.PSN_TOKEN as string;
    const myProfID = process.env.PSN_ACCOUNT_ID as string;
    console.log("Init PSN Config", { myToken, myProfID });
    let authorization;
    // 1. Authenticate and become authorized with PSN.
    // See the Authenticating Manually docs for how to get your NPSSO.
    // const accessCode = process.env.PSN_TOKEN as string;
    const accessCode = await exchangeNpssoForAccessCode(myToken);
    const authorizationInit = await exchangeAccessCodeForAuthTokens(accessCode);

    // 1.5 --- check if our token is expired, attempt a refresh
    // We'll take the `expiresIn` value and convert it to an
    // ISO date string (eg- "2021-11-02T01:02:03.246Z").
    // This conversion makes the expiration date easy to store
    // and easy to compare to the current date when used later.
    const now = new Date();
    const expirationDate = new Date(
      now.getTime() + authorizationInit.expiresIn * 1000
    ).toISOString();

    const isAccessTokenExpired =
      new Date(expirationDate).getTime() < now.getTime();

    if (isAccessTokenExpired) {
      console.log("PSN Auth Outdated, refreshing token");
      // We'll use our refresh token to get a new access token.
      // Assuming success, this function returns an auth object
      // with the same shape as the response from `exchangeAccessCodeForAuthTokens()`.
      const updatedAuthorization = await exchangeRefreshTokenForAuthTokens(
        authorizationInit.refreshToken
      );

      authorization = updatedAuthorization;
    } else {
      console.log("PSN Auth Current, using saved token");
      authorization = authorizationInit;
    }

    const targetAccountId = myProfID;
    const games = [];

    // Note: Universal search doesn't appear to work with my account, odd
    // 2. Get the user's `accountId` from the username.
    // const allAccountsSearchResults: UniversalSearchResponse<SocialAccountResult> =
    //   await makeUniversalSearch(
    //     authorization,
    //     "Incogneato",
    //     "SocialAllAccounts"
    //   );

    // Legacy search needed to retrieve account ID
    // const legacyUserSearchResult = await getProfileFromUserName(
    //   authorization,
    //   "Incogneato_"
    // );

    // console.log("legacy search result :::", legacyUserSearchResult);

    const myProfile = await getProfileFromAccountId(
      authorization,
      process.env.PSN_ACCOUNT_ID as string
    );

    const recentGamesList = await getRecentlyPlayedGames(authorization, {
      limit: 10,
      categories: ["ps4_game", "ps5_native_game"],
    });

    const transformedRecentGamesList =
      recentGamesList.data.gameLibraryTitlesRetrieve.games.map((game) => {
        const transformedGame = {
          name: game.name,
          image: game.image.url,
          titleId: game.titleId,
        };
        return transformedGame;
      });

    console.log("Generating recently played games...");
    fs.writeFileSync(
      "./src/generated/recent-games.json",
      JSON.stringify(transformedRecentGamesList)
    );

    console.log("Generation successful");

    // 3. Get the user's list of titles (games).
    console.log("Generating user titles list...");
    const { trophyTitles } = await getUserTitles(
      authorization,
      targetAccountId
    );

    for (const title of trophyTitles) {
      // 4. Get the list of trophies for each of the user's titles.
      const { trophies: titleTrophies } = await getTitleTrophies(
        authorization,
        title.npCommunicationId,
        "all",
        {
          npServiceName: title.trophyTitlePlatform.includes("PS5")
            ? undefined
            : "trophy",
        }
      );

      // 5. Get the list of _earned_ trophies for each of the user's titles.
      console.log("Generating individual title trophy lists...");
      const { trophies: earnedTrophies } = await getUserTrophiesEarnedForTitle(
        authorization,
        targetAccountId,
        title.npCommunicationId,
        "all",
        {
          npServiceName: title.trophyTitlePlatform.includes("PS5")
            ? undefined
            : "trophy",
        }
      );

      // 6. Merge the two trophy lists.
      console.log("Merging full trophy list...");
      const mergedTrophies = mergeTrophyLists(titleTrophies, earnedTrophies);

      games.push({
        gameName: title.trophyTitleName,
        platform: title.trophyTitlePlatform,
        trophyTypeCounts: title.definedTrophies,
        earnedCounts: title.earnedTrophies,
        trophyList: mergedTrophies,
      });
    }

    // 7. Write to a JSON file.
    console.log("Dumping full list to full-trophy-list.json...");
    fs.writeFileSync(
      "./src/generated/full-trophy-list.json",
      JSON.stringify(games)
    );
    console.log("Dump successfull. Exiting");
  } catch (err) {
    console.error(`Error generating trophy list ${err}`);
  }
}

const mergeTrophyLists = (
  titleTrophies: Trophy[],
  earnedTrophies: Trophy[]
) => {
  // eslint-disable-next-line
  const mergedTrophies: any[] = [];

  for (const earnedTrophy of earnedTrophies) {
    const foundTitleTrophy = titleTrophies.find(
      (t) => t.trophyId === earnedTrophy.trophyId
    );

    mergedTrophies.push(
      normalizeTrophy({ ...earnedTrophy, ...foundTitleTrophy })
    );
  }

  return mergedTrophies;
};

const normalizeTrophy = (trophy: Trophy) => {
  return {
    isEarned: trophy.earned ?? false,
    earnedOn: trophy.earned ? trophy.earnedDateTime : "unearned",
    type: trophy.trophyType,
    rarity: rarityMap[trophy.trophyRare ?? 0],
    earnedRate: Number(trophy.trophyEarnedRate),
    trophyName: trophy.trophyName,
    groupId: trophy.trophyGroupId,
  };
};

const rarityMap: Record<TrophyRarity, string> = {
  [TrophyRarity.VeryRare]: "Very Rare",
  [TrophyRarity.UltraRare]: "Ultra Rare",
  [TrophyRarity.Rare]: "Rare",
  [TrophyRarity.Common]: "Common",
};

main();
