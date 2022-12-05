import { ACTIONS } from '../reducers/Reducers';

export const addToDo = () => {
  return {
    type: ACTIONS.ADDTODO
  }
}

export const toggleModal = () => {
  return {
    type: ACTIONS.TOGGLEMODAL
  }
}