import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increaseScore, increaseCorrect, increaseIncorrect } from "../../redux/actions";
import shortid from "shortid";
import { ranInterval } from "../../Utils";

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
            <p className="question">{props.question.question}</p>
            {
                <div className="answers-box">
                    {answers.map((qst, index) => (
                        <button style={{animationDuration: index === 0 ? `0.2s` :`${index / 2}s`, animationFillMode: "both"}} className="answer-btn bounceInRight" key={shortid.generate()} onClick={() => select(qst)}>
                            {qst}
                        </button>
                    ))}
                </div>
            }

            <div className="answer-wrapper">
            {isFinished ? (
                <button className="answer-btn next-btn" onClick={props.nextQuestion}>
                    Next
                </button>
            ) : null}
            {isFinished && isCorrect ? (
                <p className="correct-text">Correct!</p>
            ) : isFinished && !isCorrect ? (
                <span className="answer-text">
                    <p className="incorrect-text">Incorrect! The correct answer is:</p>
                    <p className="correct-text">{props.question.correct}</p>
                </span>
            ) : null}
            </div>
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
