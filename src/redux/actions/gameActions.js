import { shuffle } from "../../Utils";

export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const INCREASE_SCORE = "INCREASE_SCORE";
export const INCREASE_CORRECT = "INCREASE_CORRECT";
export const INCREASE_INCORRECT = "INCREASE_INCORRECT";
export const SET_FINISHED = "SET_FINISHED";

const data = require("../../Apprentice_TandemFor400_Data.json");

/**
 * Get the questions from the data object and shuffle it and
 * send it to the reducer.
 *
 * @returns dispatch
 */
export const getQuestions = () => {
    const questions = shuffle(data);
    return (dispatch) => {
        dispatch({ type: GET_QUESTIONS, payload: { questions: questions.slice(0, 10) } });
    };
};

/**
 * Set the `isPlaying` bool to true.
 *
 * * @returns dispatch
 */
export const startGame = () => {
    const questions = shuffle(data);
    console.log(questions)
    return (dispatch) => {
        dispatch({ type: START_GAME, payload: { questions: questions.slice(0, 10) } });
    };
};

/**
 * Set the `isPlaying` bool to false and reset the scores.
 *
 * * @returns dispatch
 */
export const endGame = () => {
    return (dispatch) => {
        dispatch({ type: END_GAME });
    };
};

/**
 * Increases the score
 *
 * * @returns dispatch
 */
export const increaseScore = () => {
    return (dispatch) => {
        dispatch({ type: INCREASE_SCORE });
    };
};

/**
 * Increases the correct question amount
 *
 * * @returns dispatch
 */
export const increaseCorrect = () => {
    return (dispatch) => {
        dispatch({ type: INCREASE_CORRECT });
    };
};

/**
 * Increases the incorrect question amount
 *
 * * @returns dispatch
 */
export const increaseIncorrect = () => {
    return (dispatch) => {
        dispatch({ type: INCREASE_INCORRECT });
    };
};

/**
 * Finish the game
 *
 * * @returns dispatch
 */
export const setFinished = () => {
    return (dispatch) => {
        dispatch({ type: SET_FINISHED, payload: { isFinished: true }})
    }
}