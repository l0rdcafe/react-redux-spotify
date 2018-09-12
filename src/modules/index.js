import { combineReducers } from "redux";
import token from "./token";
import login from "./login";
import user from "./user";
import songs from "./songs";
import currSong from "./current-song";
import error from "./error";

export default combineReducers({ token, login, user, songs, currSong, error });
