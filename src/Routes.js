import React from "react";
import { Route } from "react-router";
import shortid from "shortid";

import Home from "./Home";
import Game from "./Game";

const routes = [
    <Route key={shortid.generate()} exact path="/" component={Home} />,
    <Route key={shortid.generate()} exact path="/play" component={Game} />,
]

export default routes;