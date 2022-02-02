import { boardsAPI } from '../../api/api';

export const setCategories = (data) => ({
    type: 'SET_CATEGORIES',
    payload: data
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