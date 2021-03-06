import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import shortid from "shortid";
import { QuestionBox, ScoreBox } from "./../../components";
import { setFinished, endGame } from "./../../redux/actions";

/**
 * Renders the main game page "/play".
 * Holds the game logic for navigating the game.
 *
 * @param {*} props
 * @returns
 */
function Game(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [endAmount, setEndAmount] = useState(0);

    const { questions } = props;

    useEffect(() => {
        if (questions && questions.length > 0) {
            setEndAmount(questions.length);
        }

        return () => {};
    }, [questions]);

    /**
     * Displays the next question.
     * Sets the currentQuestion amount to the next amount
     * if the next question exists.
     *
     */
    const nextQuestion = () => {
        let endA = endAmount;
        let currentQuestionA = currentQuestion;

        if (currentQuestion === endA - 1) {
            return props.setFinished();
        }

        if (currentQuestion !== endA - 1) {
            setCurrentQuestion((currentQuestionA += 1));
        }
    };

    /**
     * Allow the player to play the game again.
     *
     */
    const playAgain = () => {
        props.endGame();
    };

    // If we are not playing the game, return to home page.
    if (!props.isPlaying) {
        props.history.push("/");
    }

    return (
        <div className="game-wrapper">
            {!props.isFinished
                ? questions.map((question, index) =>
                      index === currentQuestion ? (
                          <QuestionBox
                              key={shortid.generate()}
                              current={currentQuestion}
                              endAmount={endAmount}
                              question={question}
                              nextQuestion={nextQuestion}
                          />
                      ) : null
                  )
                : null}
            {props.isFinished ? <ScoreBox playAgain={playAgain} /> : null}
        </div>
    );
}

Game.propTypes = {
    questions: PropTypes.array,
    isFinished: PropTypes.bool,
    isPlaying: PropTypes.bool,
    endGame: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        questions: state.gameReducer.questions,
        isFinished: state.gameReducer.isFinished,
        isPlaying: state.gameReducer.isPlaying,
    };
};

export default connect(mapStateToProps, { setFinished, endGame })(Game);
