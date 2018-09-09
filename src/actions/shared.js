import { createActions } from "redux-actions";
import getUserData from "../api/spotify-api";
import { setUser } from "./user";
import { setUserSongs } from "./songs";

const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_IN_ERROR = "SIGN_IN_ERROR";
const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";

const { signInSuccess, signInError, signOutSuccess } = createActions(
  {},
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS
);

const fetchUserData = options => async dispatch => {
  try {
    const data = await getUserData(options);
    dispatch(setUser(data[0]));
    dispatch(setUserSongs(data[1].items));
  } catch (e) {
    dispatch(signInError(e));
  }
};

export { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS, signInSuccess, signInError, signOutSuccess, fetchUserData };
