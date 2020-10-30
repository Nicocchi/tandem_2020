import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increaseScore, increaseCorrect, increaseIncorrect } from "../../redux/actions";

function QuestionBox(props) {
    const [isCorrect, setIsCorrect] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const answers = [...props.question.incorrect, props.question.correct];

    const select = (index) => {
        if (isFinished) return;
        if (index === props.question.correct) {
            setIsCorrect(true);
            props.increaseCorrect();
            props.increaseScore();
        } else {
            props.increaseIncorrect();
        }

        setIsFinished(true);
    };
    return (
        <div>
            <p>{props.question.question}</p>
            {answers.map((qst, index) => (
                <button onClick={() => select(qst)}>{qst}</button>
            ))}
            {isFinished ? <button onClick={props.nextQuestion}>Next</button> : null}
            {isFinished && isCorrect ? (
                <p>Correct!</p>
            ) : isFinished && !isCorrect ? (
                <p>Incorrect! Correct answer is {props.question.correct}</p>
            ) : null}
        </div>
    );
}

QuestionBox.propTypes = {
    question: PropTypes.exact({
        question: PropTypes.string,
        correct: PropTypes.string,
        incorrect: PropTypes.arrayOf(PropTypes.string),
    }),
    nextQuestion: PropTypes.func,
};

export default connect(null, { increaseScore, increaseCorrect, increaseIncorrect })(QuestionBox);
