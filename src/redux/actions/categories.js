import { setBoards, setLoaded } from './boards';
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
  dispatch(setCategoriesLoading(true))
  let response = await boardsAPI.getCategories()
  dispatch(setCategories(response.data))
  dispatch(setCategoriesLoading(false))

}

export const changeCategories = (currentCategoryItem) => async  (dispatch) =>  {
  dispatch(setLoaded(false))
  let response = await boardsAPI.changeCategories(currentCategoryItem)
  dispatch(setBoards(response.data))
}