import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import logger from "redux-logger";
import "./index.css";
import reducer from "./reducers";
import App from "./components/app";
import Callback from "./components/callback";

const store = createStore(reducer, applyMiddleware(promiseMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route path="/" exact component={App} />
        <Route path="/callback" component={Callback} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
