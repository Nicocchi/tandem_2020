import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startGame, endGame } from "./../../redux/actions";

/**
 * Home page
 *
 * @param {*} props
 * @returns
 */
function Home(props) {
    useEffect(() => {
        props.endGame();
        return () => {};
    });
    return (
        <header className="App-header">
            <p className="text-shadow-pop-left title1">Tandem</p>
            <p className="text-shadow-pop-left title2">Trivia</p>
            <NavLink to="/play" onClick={props.startGame} className="play-btn animated-infinite swing">
                Play
            </NavLink>
        </header>
    );
}

Home.propTypes = {
    startGame: PropTypes.func
};

export default connect(null, { startGame, endGame })(Home);
