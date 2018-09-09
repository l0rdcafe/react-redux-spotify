import { handleActions } from "redux-actions";

export default handleActions(
  {
    TOKEN_SET: (state, action) => action.payload,
    SIGN_OUT_SUCCESS: (state, action) => ""
  },
  ""
);
