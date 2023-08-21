// This file is created because we want one root reducer, so wrap all reducers into it and store it to store.
import changeTasks from "./CurdReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  changeTasks, // we can add all reducers here
});
export default rootReducer;
