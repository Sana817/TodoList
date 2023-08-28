import todoTaskReducer from "./TodoTaskReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  todoTaskReducer,
});
export default rootReducer;
