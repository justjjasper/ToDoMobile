import { toDoReducer } from "./Reducers";
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  toDo: toDoReducer
})