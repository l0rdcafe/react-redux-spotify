import { SET_SONG } from "../actions/current-song";
import { SIGN_OUT_SUCCESS } from "../actions/shared";

const currSong = (state = {}, action) => {
  switch (action.type) {
    case SET_SONG:
      return action.song;
    case SIGN_OUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default currSong;
