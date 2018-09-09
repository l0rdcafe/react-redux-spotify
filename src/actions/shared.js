import { createActions } from "redux-actions";
import getUserData from "../api/spotify-api";

const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_IN_ERROR = "SIGN_IN_ERROR";
const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";

const { signInSuccess, signInError, signOutSuccess, fetchUserData } = createActions(
  {
    FETCH_USER_DATA: async options => {
      try {
        const result = await getUserData(options);
        return result;
      } catch (e) {
        throw new Error(e.message);
      }
    }
  },
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS
);

export { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS, signInSuccess, signInError, signOutSuccess, fetchUserData };
