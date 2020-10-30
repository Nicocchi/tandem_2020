import React from "react";
//import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Home(props) {
    return (
        <header className="App-header">
            <h1>Tandem Trivia</h1>
            <NavLink to="/play">Play</NavLink>
        </header>
    );
}

//Home.propTypes = {};

export default Home;
