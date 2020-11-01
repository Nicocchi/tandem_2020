import React from "react";
import ReactDOM from "react-dom";
import QuestionBox from "./../QuestionBox";
import store from "../../../redux/store";
import { Provider } from "react-redux";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";
import { stubConsoleError } from "./../../../Utils";

const question = {
    correct: "Unicorn",
    incorrect: ["Bear", "Rabbit", "Seal"],
    question: "What is the national animal of Scotland?",
};

describe("QuestionBox", () => {
    afterEach(() => {
        cleanup();
    });

    function mockFunction() {}

    it("renders without crashing with props", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <QuestionBox question={question} nextQuestion={mockFunction} />
            </Provider>,
            div
        );
    });

    describe("Errors", () => {
        stubConsoleError();

        it("throws an error when no props are not passed", () => {
            const { getByTestId } = render(
                <Provider store={store}>
                    <QuestionBox />
                </Provider>
            );

            expect(getByTestId).toThrow();
        });

        it("throws an error when one prop is not passed", () => {
            const { getByTestId } = render(
                <Provider store={store}>
                    <QuestionBox question={question} />
                </Provider>
            );

            expect(getByTestId).toThrow();
        });
    });

    it("matches snapshop", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <QuestionBox question={question} />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe("question", () => {
        it("renders the text correctly", () => {
            const div = document.createElement("div");
            const { getByTestId } = render(
                <Provider store={store}>
                    <QuestionBox question={question} nextQuestion={mockFunction} />
                </Provider>
            );
            expect(getByTestId("question")).toHaveTextContent(question.question);
        });
    });
});
