import { handleActions } from "redux-actions";

export default handleActions(
  {
    SET_USER: (state, action) => ({ ...action.payload }),
    SIGN_OUT_SUCCESS: (state, action) => ({})
  },
  {}
);
