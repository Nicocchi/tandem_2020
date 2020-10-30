import { shuffle } from "../../Utils";

export const START_GAME = "START_GAME";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const INCREASE_SCORE = "INCREASE_SCORE";
export const INCREASE_CORRECT = "INCREASE_CORRECT";
export const INCREASE_INCORRECT = "INCREASE_INCORRECT";
export const SET_FINISHED = "SET_FINISHED";

const data = require("../../Apprentice_TandemFor400_Data.json");

export const getQuestions = () => {
    const questions = shuffle(data);
    return (dispatch) => {
        dispatch({ type: GET_QUESTIONS, payload: { questions: questions.slice(0, 10) } });
    };
};

export const startGame = () => {
    return (dispatch) => {
        dispatch({ type: START_GAME, payload: { isPlaying: true } });
    };
};

export const increaseScore = () => {
    return (dispatch) => {
        dispatch({ type: INCREASE_SCORE });
    };
};

export const increaseCorrect = () => {
    return (dispatch) => {
        dispatch({ type: INCREASE_CORRECT });
    };
};

export const increaseIncorrect = () => {
    return (dispatch) => {
        dispatch({ type: INCREASE_INCORRECT });
    };
};

export const setFinished = () => {
    return (dispatch) => {
        dispatch({ type: SET_FINISHED, payload: { isFinished: true }})
    }
}