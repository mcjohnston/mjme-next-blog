import { ProfileFromAccountIdResponse } from "psn-api";

export type PSNProfile = ProfileFromAccountIdResponse;

export type TrimmedRecentGamesList = {
  name: string;
  image: string;
  titleId: string;
};
