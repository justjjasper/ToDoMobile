const defaultState: {todo: { name: string, done: boolean}[] } = {
  todo: [ {name: 'Eat my shorts', done: false}, {name: 'Do not eat donuts', done: false} ]
}

const ACTIONS = {
  ADDTODO: 'Add ToDo'
}

export const toDoReducer = (state = defaultState.todo, action: any) => {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return [...state, { name: action.payload.name, done: false }]
    default:
      return state
  }
}

