const CLIENT_ID = "f8df77a3e85c4e49b6e702e8be74f262";
const SCOPES = encodeURIComponent("user-read-currently-playing user-read-recently-played");
// const REDIRECT_URI = encodeURIComponent("https://react-redux-spotify.surge.sh/callback");
const REDIRECT_URI = encodeURIComponent("http://localhost:3000/callback");
const URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&show_dialog=true`;

export default URL;
