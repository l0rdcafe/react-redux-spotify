import { createAction } from "redux-actions";

const SET_SONG = "SET_SONG";

const setCurrSong = createAction(SET_SONG);

export { SET_SONG, setCurrSong };
