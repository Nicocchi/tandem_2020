import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increaseScore, increaseCorrect, increaseIncorrect } from "../../redux/actions";
import shortid from "shortid";
import { shuffle } from "../../Utils";

function QuestionBox(props) {
    const [isCorrect, setIsCorrect] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (props.question?.correct && props.question?.incorrect) {
            setAnswers(shuffle([...props.question.incorrect, props.question.correct]));
        }
        return () => {
            
        }
    }, [props.question])

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
            <p className="question animated fade-in">
                {props.current + 1} / {props.endAmount}
            </p>
            <p className="question animated fade-in" data-testid="question">
                {props.question?.question}
            </p>
            {
                <div style={{ display: isFinished ? "none" : "flex" }} className="answers-box">
                    {answers.map((qst, index) => (
                        <button
                            style={{
                                animationDuration: index === 0 ? `0.2s` : `${index / 2}s`,
                                animationFillMode: "both",
                            }}
                            className={`answer-btn ${!isFinished ? "bounce-in-right" : null}`}
                            key={shortid.generate()}
                            onClick={() => select(qst)}
                        >
                            {qst}
                        </button>
                    ))}
                </div>
            }

            <div className="answer-wrapper">
                {isFinished ? (
                    <button className="answer-btn next-btn animated flip-in-y" onClick={props.nextQuestion}>
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
        question: PropTypes.string.isRequired,
        correct: PropTypes.string.isRequired,
        incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    nextQuestion: PropTypes.func.isRequired,
};

export default connect(null, { increaseScore, increaseCorrect, increaseIncorrect })(QuestionBox);
