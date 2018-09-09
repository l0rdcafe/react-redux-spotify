const getUserInfo = async options => {
  const URL = "https://api.spotify.com/v1/me";
  let info;
  try {
    info = await fetch(URL, options);
    info = info.json();
    return info;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getUserSongs = async options => {
  const URL = "https://api.spotify.com/v1/me/player/recently-played";
  let played;

  try {
    played = await fetch(URL, options);
    played = played.json();
    return played;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getUserData = async options => {
  const result = await Promise.all([getUserInfo(options), getUserSongs(options)]);
  return result;
};

export default getUserData;
