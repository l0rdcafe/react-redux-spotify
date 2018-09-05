import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, ButtonCircle, Heading } from "rebass";
import URL from "../constants/auth";

class App extends Component {
  signIn = () => {
    window.location = URL;
  };
  render() {
    const { login } = this.props.state;
    return (
      <Container p={4}>
        <Heading mb={4} style={{ textAlign: "center" }}>
          Sign in to Spotify to preview your recently played tracks
        </Heading>
        {!login && (
          <ButtonCircle style={{ display: "block", margin: "auto", cursor: "pointer" }} onClick={this.signIn}>
            LOGIN
          </ButtonCircle>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App);
