import { type Metadata } from "next";
import BasePageWrap from "@/components/shared/BasePageWrap";
import trophies from "@/generated/full-trophy-list.json";
import recentGames from "@/generated/recent-games.json";
import { TrimmedRecentGamesList } from "@/types/psn";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Matthew Johnston",
  description: "Learn a bit more about Matthew Johnston",
};

export default function AboutPage() {
  // console.log("recent games", recentGames);
  console.log(
    "full trophy list",
    trophies.filter(
      (trophy) =>
        trophy.earnedCounts.platinum > 0 && trophy.trophyTypeCounts.platinum > 0
    )
  );
  return (
    <main>
      <BasePageWrap>
        This is the AboutPage
        {recentGames.map((game: TrimmedRecentGamesList) => {
          return (
            <div key={`psn-recently-played-${game.titleId}`}>
              {game.name}
              <Image
                src={game.image}
                width={100}
                height={100}
                alt={`${game.name} trophy image`}
              />
            </div>
          );
        })}
      </BasePageWrap>
    </main>
  );
}
