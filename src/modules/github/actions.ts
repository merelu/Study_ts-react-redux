import { GithubProfile } from "../../api/github";
import { AxiosError } from "axios";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE" as const;
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS" as const;
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR" as const;

export const getUserProfile = () => ({
  type: GET_USER_PROFILE,
});
export const getUserProfileSuccess = (data: GithubProfile) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: data,
});
export const getUserProfileError = (e: AxiosError) => ({
  type: GET_USER_PROFILE_ERROR,
  error: true,
  payload: e,
});
