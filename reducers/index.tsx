import { toDoReducer, modalReducer } from "./Reducers";
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  toDo: toDoReducer,
  modalStatus: modalReducer
})