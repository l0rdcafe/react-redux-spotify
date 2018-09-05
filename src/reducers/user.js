import { SET_USER } from "../actions/user";
import { SIGN_OUT_SUCCESS } from "../actions/shared";

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.user };
    case SIGN_OUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default user;
