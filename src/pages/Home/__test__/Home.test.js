import React from "react";
import ReactDOM from "react-dom";
import Home from "./../Home";
import store from "../../../redux/store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

describe("Home Page", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    afterEach(() => {
        cleanup();
    });

    it("renders without crashing without props", () => {
        const div = document.createElement("div");

        ReactDOM.render(
            <Provider store={store}>
                <Router history={history}>
                    <Home history={history} />
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
                        <Home history={history} />
                    </Router>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
