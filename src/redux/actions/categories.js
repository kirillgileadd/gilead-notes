import { boardsAPI } from '../../api/api';

export const setCategories = (data) => ({
    type: 'SET_CATEGORIES',
    payload: data
})
export const addCategory = (value) => ({
    type: 'ADD_CATEGORY',
    payload: value
})

export const setCategoriesLoading = (data) => ({
    type: 'SET_CATEGORIES_LOADING',
    payload: data
})

export const fetchCategories = () => async  (dispatch) =>  {
  let response = await boardsAPI.getCategories()
  dispatch(setCategories(response.data))
}

export const changeCategories = (currentCategoryItem) => async  (dispatch) =>  {
  let response = await boardsAPI.changeCategories(currentCategoryItem)
  // dispatch(setBoards(response.data))
}
export const addCategoryThunk = (category) => async  (dispatch) =>  {
  try {
    let response = await boardsAPI.postCategory(category)
    dispatch(addCategory(category))
  } catch (e) {
    console.log(e)
  }
  // dispatch(setBoards(response.data))
}
