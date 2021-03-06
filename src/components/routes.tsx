import React from "react";
import { LoginScreen } from "./login-screen";
import { FeedScreen } from "./feed-screen";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"} component={LoginScreen} />
        <Route exact path={"/feed"} component={FeedScreen} />
        <Redirect to={"/feed"} />
      </Switch>
    </BrowserRouter>
  );
};
