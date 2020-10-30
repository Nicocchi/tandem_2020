import React, { useEffect } from "react";
//import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { startGame, endGame } from "./redux/actions";
import { connect } from "react-redux";

function Home(props) {
    useEffect(() => {
        props.endGame();
        return () => {};
    });
    return (
        <header className="App-header">
            <h1>Tandem Trivia</h1>
            <NavLink to="/play" onClick={props.startGame}>
                Play
            </NavLink>
        </header>
    );
}

//Home.propTypes = {};

export default connect(null, { startGame, endGame })(Home);
