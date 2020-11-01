import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { endGame } from "./../../redux/actions";

function Header(props) {
    return (
        <div className="game-header">
            {props.isPlaying ? (
                <button data-testid="header-btn" className="answer-btn" onClick={props.endGame}>
                    Quit
                </button>
            ) : null}
        </div>
    );
}

Header.propTypes = {
    endGame: PropTypes.func,
    isPlaying: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        isPlaying: state.gameReducer.isPlaying,
    };
};

export default connect(mapStateToProps, { endGame })(Header);
