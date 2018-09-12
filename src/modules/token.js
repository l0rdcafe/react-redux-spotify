import { handleActions, createAction } from "redux-actions";

const TOKEN_SET = "TOKEN_SET";

const setToken = createAction(TOKEN_SET);

export { TOKEN_SET, setToken };

export default handleActions(
  {
    TOKEN_SET: (state, action) => action.payload,
    SIGN_OUT_SUCCESS: (state, action) => ""
  },
  ""
);
