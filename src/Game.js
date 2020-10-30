import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import QuestionBox from './components/QuestionBox/QuestionBox';
import shortid from "shortid";

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
    }, [])

    console.log(endAmount)
    return (
        <div>
            <h1>Game</h1>
            {
                questions.map(question => (
                    <QuestionBox key={shortid.generate()} question />
                ))
            }
        </div>
    )
}

Game.propTypes = {
    questions: PropTypes.array,
}

const mapStateToProps = (state) => {
    return {
      questions: state.gameReducer.questions,
    }
  }
  
  export default connect(mapStateToProps)(Game);

