const initialState = {
  items: {},
  loaded: false
};


export const boards = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS': {
      return {
        ...state,
        items: action.payload,
        loaded: true
      };
    }
    default:
      return state;
  }
};