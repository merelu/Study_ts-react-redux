import * as actions from "./actions";
import { GithubProfile } from "../../api/github";

export type GithubAction =
  | ReturnType<typeof actions.getUserProfile>
  | ReturnType<typeof actions.getUserProfileSuccess>
  | ReturnType<typeof actions.getUserProfileError>;

export type Githubstate = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
};
