import { Githubstate, GithubAction } from "./types";
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
} from "./actions";

const initialState: Githubstate = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};

const github = (
  state: Githubstate = initialState,
  action: GithubAction
): Githubstate => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case GET_USER_PROFILE_ERROR:
      return {
        ...state,
        userProfile: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    default:
      return state;
  }
};

export default github;
