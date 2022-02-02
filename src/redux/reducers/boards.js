const initialState = {
  items: {
    'list-1': {
      id: 1,
      title: 'To Do',
      tasks: []
    },
    'list-2': {
      id: 2,
      title: 'Progress',
      tasks: []
    },
    'list-3': {
      id: 3,
      title: 'Done',
      tasks: []
    }
  },
  cards: [],
  listIds: ['list-1', 'list-2', 'list-3'],
  totalCount: null,
  loading: true,
  fetching: true,
  currentPage: 1,
};


export const boards = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOARDS': {
      const setTasks = (action, id) => {
        return action.filter(obj => obj.listId === id)
      }
      return {
        ...state,
        items: {
          ...state.items,
          [`list-1`]: {
            ...state.items[`list-1`],
            tasks: [
              ...state.items[`list-1`].tasks,
              ...setTasks(action.payload, 1)
            ]
          },
          [`list-2`]: {
            ...state.items[`list-2`],
            tasks: [
              ...state.items[`list-2`].tasks,
              ...setTasks(action.payload, 2)
            ]
          },
          [`list-3`]: {
            ...state.items[`list-3`],
            tasks: [
              ...state.items[`list-3`].tasks,
              ...setTasks(action.payload, 3)
            ]
          }
        },
        cards: [...state.cards, ...action.payload],
        loading: false
      };
    }
    case 'SET_TOTAL_COUNT': {
      return {
        ...state,
        totalCount: action.payload
      }
    }
    case 'SET_CURRENT_PAGE': {
      const newCurrentPage = state.currentPage + 1
      return {
        ...state,
        currentPage: newCurrentPage
      }
    }
    case 'SET_FETCHING': {
      return {
        ...state,
        fetching: action.payload
      }
    }
    case 'ADD_TASK': {
      return {
        ...state,
        items: {
          ...state.items,
          [`list-${action.payload.listId}`]: {
            ...state.items[`list-${action.payload.listId}`],
            tasks: state.items[`list-${action.payload.listId}`].tasks ? [action.payload.task, ...state.items[`list-${action.payload.listId}`].tasks ] : [action.payload.task]
          }
        },
        cards: [...state.cards, action.payload.task],
      };
    }
    case 'DELETE_TASK': {
      const index = action.payload
      return {
        ...state,
        // items: {
        //   ...state.items,
        //   [`list-${action.payload}`]: {
        //     ...state.items[`list-${action.payload}`],
        //     tasks: [...state.items[`list-${action.payload}`].tasks.slice(0, index)]
        //   }
        // }
      };
    }
    case 'SET_LOADED': {
      return {
        ...state,
        loading: action.payload
      };
    }
    case 'CLEAR_BOARDS': {
      return {
        ...state,
        items: {
          ...state.items,
          [`list-1`]: {
            ...state.items[`list-1`],
            tasks: []
          },
          [`list-2`]: {
            ...state.items[`list-2`],
            tasks: []
          },
          [`list-3`]: {
            ...state.items[`list-3`],
            tasks: []
          }
        },
        cards: [],
        currentPage: 1,
        loading: false
      };
    }
    default:
      return state;
  }
};