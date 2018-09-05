const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_IN_ERROR = "SIGN_IN_ERROR";
const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";

const signInSuccess = () => ({ type: SIGN_IN_SUCCESS });

const signInError = error => ({ type: SIGN_IN_ERROR, error });

const signOutSuccess = () => ({ type: SIGN_OUT_SUCCESS });

export { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS, signInSuccess, signInError, signOutSuccess };
