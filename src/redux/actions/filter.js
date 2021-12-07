export const setCategoryAction = (catIndex) => {
  return {
    type: 'SET_CATEGORY',
    payload: catIndex
  };
};

export const setSearch = (name) => {
  return {
    type: 'SET_SEARCH',
    payload: name
  };
}