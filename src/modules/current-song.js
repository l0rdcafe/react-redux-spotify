import { handleActions, createAction } from "redux-actions";

const SET_SONG = "SET_SONG";

const setCurrSong = createAction(SET_SONG);

export { SET_SONG, setCurrSong };

export default handleActions(
  {
    SET_SONG: (state, action) => action.payload,
    SIGN_OUT_SUCCESS: (state, action) => ({})
  },
  {}
);
