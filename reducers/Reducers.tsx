import { AnyAction } from 'redux';

const defaultState: {todo: { name: string, done: boolean}[] } = {
  todo: [ {name: 'Eat my shorts', done: false}, {name: 'Do not eat donuts', done: false} ]
}

export const ACTIONS = {
  ADDTODO: 'Add ToDo',
  TOGGLEMODAL: 'Toggle Modal'
}

export const toDoReducer = (state = defaultState.todo, action: any) => {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return [...state, { name: action.payload.name, done: false }]
    default:
      return state
  }
}

export const modalReducer = (state: boolean = false, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.TOGGLEMODAL:
      console.log('what is sate', state)
      return !state
    default:
      return state
  }
}