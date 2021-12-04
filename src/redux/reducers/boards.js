const initialState = {
  items: {},
  listIds: [],
  loading: false
};


export const boards = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOARDS': {
      return {
        ...state,
        items: action.payload.items,
        listIds: action.payload.listIds,
        loading: true
      };
    }
    case 'ADD_TASK': {
      return {
        ...state,
        items: {
          ...state.items,
          [`list-${action.listId}`]: {
            ...state.items[`list-${action.listId}`],
            tasks: state.items[`list-${action.listId}`].tasks ? [...state.items[`list-${action.listId}`].tasks, action.payload] : [action.payload]
          }
        }
      };
    }
    case 'SET_LOADED': {
      return {
        ...state,
        loading: action.payload
      }
    }
    default:
      return state;
  }
};