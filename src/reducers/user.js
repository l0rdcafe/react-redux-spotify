import { handleActions } from "redux-actions";

export default handleActions(
  {
    FETCH_USER_DATA: (state, action) => ({ ...action.payload[0] }),
    SIGN_OUT_SUCCESS: (state, action) => ({})
  },
  {}
);
