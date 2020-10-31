import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { endGame } from "../../redux/actions";

function Header(props) {
    return (
        <div className="game-header">
            <button className="answer-btn" onClick={props.endGame}>Quit</button>
        </div>
    )
}

Header.propTypes = {
    endGame: PropTypes.func,
}

export default connect(null, { endGame })(Header);

