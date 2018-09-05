import { TOKEN_SET } from "../actions/token";
import { SIGN_OUT_SUCCESS } from "../actions/shared";

const token = (state = "", action) => {
  switch (action.type) {
    case TOKEN_SET:
      return action.token;
    case SIGN_OUT_SUCCESS:
      return "";
    default:
      return state;
  }
};

export default token;
