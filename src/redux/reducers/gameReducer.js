import {
    START_GAME,
    GET_QUESTIONS,
    INCREASE_SCORE,
    INCREASE_CORRECT,
    INCREASE_INCORRECT,
    SET_FINISHED,
    END_GAME,
} from "../actions";

const initialState = {
    questions: [],
    isPlaying: false,
    isFinished: false,
    correct: 0,
    incorrect: 0,
    score: 0,
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return { ...state, isPlaying: action.payload.isPlaying };
        case END_GAME:
            return { ...state, isPlaying: action.payload.isPlaying };
        case GET_QUESTIONS:
            return { ...state, questions: action.payload.questions };
        case INCREASE_SCORE:
            let scoreValue = state.score;
            scoreValue += 100;
            return { ...state, score: scoreValue };
        case INCREASE_CORRECT:
            let correctValue = state.correct;
            correctValue++;
            return { ...state, correct: correctValue };
        case INCREASE_INCORRECT:
            let incorrectValue = state.incorrect;
            incorrectValue++;
            return { ...state, incorrect: incorrectValue };
        case SET_FINISHED:
            const { isFinished } = action.payload;
            return { ...state, isFinished: isFinished };
        default:
            return { ...state };
    }
};
