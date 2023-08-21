import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga"; // step 1 :middleware

import rootReducer from "./Reducers/index";
import { rootSaga } from "./Saga/saga";
const sagaMiddleware = createSagaMiddleware(); // setp 2 :create saga middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)) // step 3 : you must connect the middleware to the store using the method applyMiddleware.
);
sagaMiddleware.run(rootSaga); // step4: to start the saga

export default store;
