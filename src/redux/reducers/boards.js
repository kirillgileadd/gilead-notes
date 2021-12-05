const initialState = {
  items: {
    "list-1": {
      id: 1,
      title: 'To Do',
      tasks: []
    },
    "list-2": {
      id: 2,
      title: 'Progress',
      tasks: []
    },
    "list-3": {
      id: 3,
      title: 'Done',
      tasks: []
    }
  },
  listIds: ['list-1', 'list-2', 'list-3'],
  loading: false
};


export const boards = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOARDS': {
      const setItem = action.payload[0].listId

      return {
        ...state,
        items: {
          ...state.items,
          [`list-${setItem}`]: {
            ...state.items[`list-${setItem}`],
            tasks: action.payload
          }
        },
        loading: true
      };
    }
    case 'ADD_TASK': {
      return {
        ...state,
        items: {
          ...state.items,
          [`list-${action.payload.listId}`]: {
            ...state.items[`list-${action.payload.listId}`],
            tasks: state.items[`list-${action.payload.listId}`].tasks ? [...state.items[`list-${action.payload.listId}`].tasks, action.payload.task] : [action.payload.task]
          }
        }
      };
    }
    case 'SET_LOADED': {
      return {
        ...state,
        loading: action.payload
      };
    }
    default:
      return state;
  }
};