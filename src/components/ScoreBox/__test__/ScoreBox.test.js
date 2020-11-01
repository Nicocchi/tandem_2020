import React from "react";
import ReactDOM from "react-dom";
import ScoreBox from "./../ScoreBox";
import store from "../../../redux/store";
import { Provider } from "react-redux";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

describe("ScoreBox", () => {
    afterEach(() => {
        cleanup();
    });

    it("renders without crashing without props", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <ScoreBox />
            </Provider>,
            div
        );
    });

    it("matches snapshop", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <ScoreBox />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe("question", () => {
        it("renders the text correctly", () => {
            const { getByTestId } = render(
                <Provider store={store}>
                    <ScoreBox />
                </Provider>
            );

            // To be 0 because of initial state is 0
            expect(getByTestId("scorebox-correct-val")).toHaveTextContent("0");
            expect(getByTestId("scorebox-incorrect-val")).toHaveTextContent("0");
            expect(getByTestId("scorebox-score-val")).toHaveTextContent("0");
            expect(getByTestId("scorebox-highscore-val")).toHaveTextContent("0");
        });
    });
});
