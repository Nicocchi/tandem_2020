import React from "react";
import ReactDOM from "react-dom";
import Header from "./../Header";
import store from "./../../../redux/store";
import { Provider } from "react-redux";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";
import { stubConsoleError } from "./../../../Utils";

describe("Header", () => {
    afterEach(() => {
        cleanup();
    });

    it("renders without crashing without props", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Header />
            </Provider>,
            div
        );
    });

    it("matches snapshop", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Header />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});