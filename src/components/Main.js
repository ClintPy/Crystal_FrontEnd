import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import Client from "./Client";
import App from "../App";
import Details from "./Details";
import Display from "./Invoice/Display";

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Client} />
      <Route path="/users" component={App} />
      <Route path="/user/:id" component={Details} />
      <Route path="/display/:id" component={Display} />
    </Switch>
  );
};

export default withRouter(Main);
