import React from 'react';
import {Route, Switch} from "react-router-dom";
import {authRoutes} from "../routes";

const AppRouter = () => {
  return (
    <Switch>
      {authRoutes.map(el => <Route
        path={el.path}
        component={el.Component}
        key={el.path}
        exact
      />)}
    </Switch>)
}

export default AppRouter;