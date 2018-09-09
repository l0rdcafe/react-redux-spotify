import { createAction } from "redux-actions";

const TOKEN_SET = "TOKEN_SET";

const setToken = createAction(TOKEN_SET);

export { TOKEN_SET, setToken };
