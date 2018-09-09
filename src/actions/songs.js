import { createAction } from "redux-actions";

const SET_SONGS = "SET_SONGS";

const setUserSongs = createAction(SET_SONGS);

export { SET_SONGS, setUserSongs };
