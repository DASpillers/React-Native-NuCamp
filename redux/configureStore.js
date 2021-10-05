import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { campsites } from "../shared/campsites";
import { comments } from "../shared/comments";
import { promotions } from "../shared/promotions";
import { partners } from "../shared/partners";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites,
      comments,
      partners,
      promotions,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
