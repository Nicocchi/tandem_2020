import { START_GAME, GET_QUESTIONS } from "../actions";

const initialState = {
    questions: [],
    isPlaying: false,
    correct: 0,
    incorrect: 0,
    score: 0,
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            const { isPlaying } = action.payload;
            console.log("isPlaying", isPlaying)
            return { ...state, isPlaying };
        case GET_QUESTIONS:
            const { questions } = action.payload;
            return { ...state, questions };
        default:
            return { ...state };
    }
};
