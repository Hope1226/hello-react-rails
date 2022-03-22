import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import greetingReducer from "./reducer/greeting/greeting";

const reducer = combineReducers({
  greetingReducer,
});

const globalStore = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger
  ),
);

export default globalStore;