import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import stories from "./reducers/HackerNewsListReducer";

export default createStore(
    combineReducers({
        stories
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);