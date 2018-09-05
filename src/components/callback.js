import React from "react";
import { connect } from "react-redux";
import { Container, Heading, Text, Toolbar, ButtonOutline, ButtonCircle } from "rebass";
import { setToken } from "../actions/token";
import { signInSuccess, signInError, signOutSuccess } from "../actions/shared";
import { getUserInfo, getUserSongs } from "../api/spotify-api";
import { setUser } from "../actions/user";
import { setUserSongs } from "../actions/songs";
import { setCurrSong } from "../actions/current-song";

class Callback extends React.Component {
  componentDidMount() {
    const error = /[#&]error=/.exec(window.location.hash);

    if (error) {
      this.props.dispatch(signInError());
    }

    const match = /[#&]access_token=([^&]*)/.exec(window.location.hash);
    if (match) {
      const accessToken = decodeURIComponent(match[1].replace(/\+g/, " "));
      this.props.dispatch(setToken(accessToken));
      localStorage.setItem("ACCESS_TOKEN", accessToken);
      this.props.dispatch(signInSuccess());
      this.fetchData(accessToken);
    } else if (localStorage.getItem("ACCESS_TOKEN")) {
      const accessToken = localStorage.getItem("ACCESS_TOKEN");
      this.props.dispatch(setToken(accessToken));
      this.props.dispatch(signInSuccess());
      this.fetchData(accessToken);
    }

    window.location.hash = "";
  }
  fetchData = token => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    Promise.all([getUserInfo(options), getUserSongs(options)]).then(data => {
      this.props.dispatch(setUser(data[0]));
      this.props.dispatch(setUserSongs(data[1].items));
    });
  };
  signOut = () => {
    this.props.dispatch(signOutSuccess());
    localStorage.removeItem("ACCESS_TOKEN");
    window.location = "/";
  };
  pausePreview = () => {
    this.audio.pause();
    this.props.dispatch(setCurrSong({}));
  };
  playPreview = e => {
    const { id } = e.target;
    const song = this.props.state.songs.find(s => s.track.id === id);
    const artist = song.track.artists.reduce((a, b) => `${a} ${b.name}`, "");
    const { name } = song.track;

    if (this.audio && (this.audio.duration || !this.audio.paused)) {
      this.pausePreview();
    }

    this.audio = new Audio(song.track.preview_url);
    this.audio.play();
    this.props.dispatch(setCurrSong({ name, artist }));
  };
  render() {
    console.log(this.props.state);
    const { display_name } = this.props.state.user;
    const { songs, currSong } = this.props.state;
    return (
      <Container p={4}>
        <Heading mb={4} style={{ textAlign: "center" }}>
          {display_name ? `Welcome ${display_name}` : "Loading..."}
        </Heading>
        {songs.map(song => (
          <Toolbar key={song.track.id} bg="white" style={{ border: "1px solid black" }} color="black" mb={2}>
            <Text>
              Song: <strong>{song.track.name}</strong> – Artist:{" "}
              <strong>{song.track.artists.reduce((a, b) => `${a} ${b.name}`, "")}</strong>
            </Text>
            <ButtonOutline
              style={{ marginLeft: "auto" }}
              color="black"
              onClick={e =>
                currSong.name === song.track.name &&
                currSong.artist === song.track.artists.reduce((a, b) => `${a} ${b.name}`, "")
                  ? this.pausePreview()
                  : this.playPreview(e)
              }
              id={song.track.id}
            >
              {currSong.name === song.track.name &&
              currSong.artist === song.track.artists.reduce((a, b) => `${a} ${b.name}`, "")
                ? "Pause"
                : "Play"}{" "}
              Preview
            </ButtonOutline>
          </Toolbar>
        ))}
        {display_name ? (
          <ButtonCircle style={{ cursor: "pointer" }} onClick={this.signOut}>
            LOGOUT
          </ButtonCircle>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Callback);
