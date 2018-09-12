import { handleActions } from "redux-actions";

export default handleActions(
  {
    SIGN_IN_ERROR: (state, action) => action.payload
  },
  ""
);
