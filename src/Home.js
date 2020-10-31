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
            {/* <img alt="Tandem Trivia" src="images/logo.png" /> */}
            <p className="text-shadow-pop-left title1">Tandem</p>
            <p className="text-shadow-pop-left title2">Trivia</p>
            {/* <p className="css-3d-text2 animated bounce-in-down">Trivia</p> */}
            <NavLink to="/play" onClick={props.startGame} className="play-btn animated-infinite swing">
                Play
            </NavLink>
        </header>
    );
}

//Home.propTypes = {};

export default connect(null, { startGame, endGame })(Home);
