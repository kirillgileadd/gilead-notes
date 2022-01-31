const initialState = {
  currentCategory: null,
  search: '',
};


export const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY': {
      return {
        ...state,
        currentCategory: action.payload
      };
    }
    case 'SET_SEARCH': {
      const newValue = '' + action.payload

      return {
        ...state,
        search: newValue
      }
    }
    default:
      return state;
  }
};