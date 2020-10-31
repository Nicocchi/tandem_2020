import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

function ScoreBox(props) {
    const highScore = localStorage.getItem('score');
    return (
        <div className="score-box">
            <h1>{props.incorrect <= 2 ? "Congrats!" : "Game Over"}</h1>
            <span><p>Correct:</p><p className="score-num">{props.correct}</p></span>
            <span><p>Incorrect:</p><p className="score-num">{props.incorrect}</p></span>
            <span><p>Score:</p><p className="score-num">{props.score}</p></span>
            <span><p>High Score:</p><p className="score-num">{highScore ? highScore : props.score}</p></span>
            <button className="answer-btn next-btn animated flip-in-y" onClick={props.playAgain}>Play Again?</button>
        </div>
    )
}

ScoreBox.propTypes = {
    correct: PropTypes.number,
    incorrect: PropTypes.number,
    score: PropTypes.number,
}

const mapStateToProps = (state) => {
    return {
      correct: state.gameReducer.correct,
      incorrect: state.gameReducer.incorrect,
      score: state.gameReducer.score,
    }
  }
  
  export default connect(mapStateToProps)(ScoreBox);

