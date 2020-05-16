import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import Client from "./Client";
import App from "../App";

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Client} />
      <Route path="/users" component={App} />
    </Switch>
  );
};

export default withRouter(Main);
