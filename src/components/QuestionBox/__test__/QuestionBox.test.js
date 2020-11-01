import React from "react";
import ReactDOM from "react-dom";
import QuestionBox from "./../QuestionBox";
import store from "../../../redux/store";
import { Provider } from "react-redux";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";
import sinon from "sinon";

const question = {
    correct: "Unicorn", incorrect: ["Bear", "Rabbit", "Seal"], question: "What is the national animal of Scotland?"
}

describe('QuestionBox', () => {
    afterEach(cleanup);

    function mockFunction() {

    }

    it("renders without crashing with props", () => {
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><QuestionBox question={question} nextQuestion={mockFunction} /></Provider>, div);
    });

    it("throws an error when no props are not passed", () => {
        const div = document.createElement('div');
        const stub = sinon.stub(console, 'error');

        ReactDOM.render(<Provider store={store}><QuestionBox /></Provider>, div);
        expect(stub.calledTwice).toEqual(true);
        expect(stub.calledOnceWithExactly('Warning: Failed prop type: The prop `question` is marked as required in `QuestionBox`, but its value is `undefined`.'))
        expect(stub.calledOnceWithExactly('Warning: Failed prop type: The prop `nextQuestion` is marked as required in `QuestionBox`, but its value is `undefined`.'))
        console.error.restore();
    });

    it("throws an error when one prop is not passed", () => {
        const div = document.createElement('div');
        const stub = sinon.stub(console, 'error');

        ReactDOM.render(<Provider store={store}><QuestionBox question={question} /></Provider>, div);
        expect(stub.calledOnceWithExactly('Warning: Failed prop type: The prop `nextQuestion` is marked as required in `QuestionBox`, but its value is `undefined`.'))
        console.error.restore();
    });

    it("matches snapshop", () => {
        const tree = renderer.create(<Provider store={store}><QuestionBox question={question} /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    describe('question', () => {
        it('renders the text correctly', () => {
            const div = document.createElement('div');
            const {getByTestId} = render(<Provider store={store}><QuestionBox question={question} nextQuestion={mockFunction} /></Provider>);
            expect(getByTestId('question')).toHaveTextContent(question.question);
        })
    })
})

