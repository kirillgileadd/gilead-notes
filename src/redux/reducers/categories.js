
const initialState = {
  categoryList: [],
  isLoading: true
};


export const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES': {
      return {
        ...state,
        categoryList: action.payload
      };
    }
    case 'ADD_CATEGORY': {
      return {
        ...state,
        categoryList: [...state.categoryList, action.payload]
      };
    }
    case 'DELETE_CATEGORY': {
      return {
        ...state,
        categoryList: [...state.categoryList.filter(el => el.id !== action.payload)]
      };
    }
    case 'SET_CATEGORIES_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
};