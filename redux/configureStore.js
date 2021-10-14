import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { campsites } from "./campsites";
import { comments } from "./comments";
import { promotions } from "./promotions";
import { partners } from "./partners";
import { favorites } from "./favorites";

//PERSIST. Add persistant support for reducers so they auto updadte the state to persistant storage.
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage"; //gives us access to local storage to our device. adds sotarge support

const config = {
  //configuartion values
  key: "root", //requiredd
  storage, //required and set to the storage object we import
  debug: true, //optional. causes persist to consol log message to hellp debug issues
};

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      campsites,
      comments,
      partners,
      promotions,
      favorites,
    }),
    applyMiddleware(thunk, logger)
  );

  const persistor = persistStore(store); //enables store to be persisted. Used in App.js

  return { persistor, store }; //must be written like this to access both in App.JS
};
