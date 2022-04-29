import { categoryAPI } from '../../api/api';

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

export const deleteCategoryAction = (id) => ({
    type: 'DELETE_CATEGORY',
    payload: id
})

export const fetchCategories = () => async  (dispatch) =>  {
  let response = await categoryAPI.getCategories()
  dispatch(setCategories(response.data))
}

export const addCategoryThunk = (category) => async  (dispatch) =>  {
  try {
    let response = await categoryAPI.postCategory(category)
    dispatch(addCategory(category))
  } catch (e) {
    console.log(e)
  }
}

export const deleteCategoryThunk = (id) => async (dispatch) => {

  try {
    let response = await categoryAPI.deleteCategory(id);
    dispatch(deleteCategoryAction(id))
  } catch (err) {
    console.log(err)
  }
};