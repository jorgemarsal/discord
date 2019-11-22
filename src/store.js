import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const middlewares = [thunk];
export default function configureStore() {
  if (process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }
  return createStore(reducers, applyMiddleware(...middlewares));
}
