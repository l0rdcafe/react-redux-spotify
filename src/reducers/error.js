import { SIGN_IN_ERROR } from "../actions/shared";

const error = (state = "", action) => {
  switch (action.type) {
    case SIGN_IN_ERROR:
      return action.error;
    default:
      return state;
  }
};

export default error;
