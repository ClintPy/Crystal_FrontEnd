import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import "./index.css";
import Main from "./components/Main";
import * as serviceWorker from "./serviceWorker";

import { Route, Switch, Router } from "react-router-dom";

ReactDOM.render(
  <Router history={createHistory()}>
    <Switch>
      <React.StrictMode>
        <Route path="/" component={Main} />
      </React.StrictMode>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
