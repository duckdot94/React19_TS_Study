
/**
 * 선택적 속성으로 선언 존재하지 않아도 된다.
 */
interface UserState {
  name?: string;
  email?: string;
}
/**
 * 사용자 정보 설정
 * 사용자 정보 초기화
 */
type UserAction =
  | { type: "SET_USER"; payload: UserState }
  | { type: "CLEAR_USER" };

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    case "CLEAR_USER":
      return {};
    default:
      return state;
  }
};