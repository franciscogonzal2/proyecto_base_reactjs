import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { routeCodes } from "./routesConfig";
import Home from "../Views/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path={routeCodes.HOMEPAGE} component={Home} />
    </Switch>
  );
}

Routes.propTypes = {
  location: PropTypes.object
};

export default Routes;
