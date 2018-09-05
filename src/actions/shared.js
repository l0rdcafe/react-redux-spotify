const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_IN_ERROR = "SIGN_IN_ERROR";
const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
const SIGN_OUT_ERROR = "SIGN_OUT_ERROR";

const signInSuccess = () => ({ type: SIGN_IN_SUCCESS });

const signInError = () => ({ type: SIGN_IN_ERROR });

const signOutSuccess = () => ({ type: SIGN_OUT_SUCCESS });

const signOutError = () => ({ type: SIGN_OUT_ERROR });

export { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS, signInSuccess, signInError, signOutSuccess, signOutError };
