import { SET_SONGS } from "../actions/songs";
import { SIGN_OUT_SUCCESS } from "../actions/shared";

const songs = (state = [], action) => {
  switch (action.type) {
    case SET_SONGS:
      return [...action.songs];
    case SIGN_OUT_SUCCESS:
      return [];
    default:
      return state;
  }
};

export default songs;
