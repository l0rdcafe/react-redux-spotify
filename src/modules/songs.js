import { handleActions } from "redux-actions";

export default handleActions(
  {
    FETCH_USER_DATA: (state, action) => [...action.payload[1].items],
    SIGN_OUT_SUCCESS: (state, action) => []
  },
  []
);
