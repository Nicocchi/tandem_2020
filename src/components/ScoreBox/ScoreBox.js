import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

function ScoreBox(props) {
    return (
        <div>
            <p>Scores</p>
            <p>Correct: {props.correct}</p>
            <p>Incorrect: {props.incorrect}</p>
            <p>Score: {props.score}</p>
        </div>
    )
}

ScoreBox.propTypes = {

}

const mapStateToProps = (state) => {
    return {
      correct: state.gameReducer.correct,
      incorrect: state.gameReducer.incorrect,
      score: state.gameReducer.score,
    }
  }
  
  export default connect(mapStateToProps)(ScoreBox);

