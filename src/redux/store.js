import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import combineReducer from "./reducers";

let store = null;

// Redux dev tools
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

const devEnhancer = composeEnhancers(applyMiddleware(thunk, logger));
const enhancer = composeEnhancers(applyMiddleware());

// Create redux store
if (process.env.REACT_APP_NODE_ENV !== "production") {
    store = createStore(combineReducer, devEnhancer);
} else {
    store = createStore(combineReducer, enhancer);
}

export default store;