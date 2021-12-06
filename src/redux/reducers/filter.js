const initialState = {
  sortBy: 1,
  category: 0
};


export const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY': {
      return {
        ...state,
        category: action.payload
      };
    }
    default:
      return state;
  }
};