import { handleActions } from "redux-actions";

export default handleActions(
  {
    SET_SONGS: (state, action) => [...action.payload],
    SIGN_OUT_SUCCESS: (state, action) => []
  },
  []
);
