import React from "react";
import ReactDOM from "react-dom";
import Game from "./../Game";
import store from "../../../redux/store";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

describe("Game Page", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    afterEach(() => {
        cleanup();
    });

    it("renders without crashing without props", () => {
        const div = document.createElement("div");

        ReactDOM.render(
            <Provider store={store}>
                <Router history={history}>
                    <Game history={history} />
                </Router>
            </Provider>,
            div
        );
    });

    it("matches snapshop", () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Router history={history}>
                        <Game history={history} />
                    </Router>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
