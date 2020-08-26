import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GithubAction } from "./types";
import {
  getUserProfile,
  getUserProfileSuccess,
  getUserProfileError,
} from "./actions";
import { getUserProfileAPI } from "../../api/github";

//ThunkAction의 Generic
// TReturnType: thunk 함수에서 반환하는 값의 타입을 설정합니다.
// TState: 스토어의 상태에 대한 타입을 설정합니다.
// TExtraThunkArg: redux-thunk 미들웨어의 Extra Argument의 타입을 설정합니다.
// TBasicAction: dispatch 할 수 있는 액션들의 타입을 설정합니다.
//TReturnType의 경우 아무것도 반환하지 않는다면 void고 thunk함수에서 async를 사용하고 있으니 Promise(void)가 더 정확하다.
export function getUserProfileThunk(
  username: string
): ThunkAction<void, RootState, null, GithubAction> {
  return async (dispatch) => {
    dispatch(getUserProfile());
    try {
      const userProfile = await getUserProfileAPI(username);
      dispatch(getUserProfileSuccess(userProfile));
    } catch (e) {
      dispatch(getUserProfileError(e));
    }
  };
}
