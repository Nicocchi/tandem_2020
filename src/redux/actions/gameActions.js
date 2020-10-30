export const START_GAME = "START_GAME";
export const GET_QUESTIONS = "GET_QUESTIONS";

const questions = require("../../Apprentice_TandemFor400_Data.json");

export const getQuestions = () => {
    console.log("QUESTIONS")
    return (dispatch) => {
        dispatch({ type: GET_QUESTIONS, payload: { questions } });
    };
};

export const startGame = () => {
    console.log("START")
    return (dispatch) => {
        dispatch({ type: START_GAME, payload: { isPlaying: true } });
    };
};
