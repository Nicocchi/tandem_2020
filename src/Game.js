import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import QuestionBox from './components/QuestionBox/QuestionBox';
import shortid from "shortid";
import { setFinished } from "./redux/actions";
import ScoreBox from './components/ScoreBox/ScoreBox';

function Game(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [endAmount, setEndAmount] = useState(0);

    const { questions } = props;

    useEffect(() => {
        if (questions && questions.length > 0) {
            setEndAmount(questions.length);
        }

        return () => {
            
        }
    }, [questions])

    const nextQuestion = () => {
        let endA = endAmount;
        let currentQuestionA = currentQuestion;

        if (currentQuestion === endA - 1) {
            return props.setFinished();
        }

        if (currentQuestion !== endA - 1) {
            setCurrentQuestion(currentQuestionA += 1);
        }
    }

    const playAgain = () => {
        props.history.push("/");
    }

    if (!props.isPlaying) {
        props.history.push("/");
    }

    return (
        <div>
            <h1>Game</h1>
            {
                !props.isFinished ? questions.map((question, index) => (
                    index === currentQuestion ? <QuestionBox key={shortid.generate()} question={question} nextQuestion={nextQuestion} /> : null
                )) : null
            }
            {
                props.isFinished ? <ScoreBox playAgain={playAgain} /> : null
            }
        </div>
    )
}

Game.propTypes = {
    questions: PropTypes.array,
    isFinished: PropTypes.bool,
    isPlaying: PropTypes.bool,
}

const mapStateToProps = (state) => {
    return {
      questions: state.gameReducer.questions,
      isFinished: state.gameReducer.isFinished,
      isPlaying: state.gameReducer.isPlaying,
    }
  }
  
  export default connect(mapStateToProps, { setFinished })(Game);

