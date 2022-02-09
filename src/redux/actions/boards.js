import { boardsAPI, tasksAPI } from '../../api/api';

export const fetchBoards = (currentPage = 1, currentCategoryItem, debouncedSearchTerm ) => async (dispatch) => {
  if(currentPage === 1) {
    dispatch(setLoading(true))
  }
  try {
    if(debouncedSearchTerm) {
      let response = await boardsAPI.searchTasks(currentPage, currentCategoryItem, debouncedSearchTerm)
      dispatch(setBoards(response.data));
      dispatch(setTotalCount(response.headers["x-total-count"]))
      dispatch(setCurrentPage(currentPage))
    } else {
      let response = await boardsAPI.getBoards(currentPage, currentCategoryItem);
      dispatch(setBoards(response.data));
      dispatch(setTotalCount(response.headers["x-total-count"]))
      dispatch(setCurrentPage(currentPage))
    }
  } catch (err) {
    console.log('Something failed')
  } finally {
    dispatch(setFetching(false))
  }
};

export const deleteTaskThunk = (id, listId) => async (dispatch) => {
  try {
    let response = await tasksAPI.deleteTask(id);
    dispatch(deleteTaskAction(id, listId))
  } catch (err) {
    console.log(err)
  }
};

export const postTaskThunk = (newTask, listId) => async (dispatch) => {
  try {
    let response = await tasksAPI.postTask(newTask);
    dispatch(addTaskAction(newTask, listId))
  } catch (err) {
    console.log('Something failed')
  }
};

export const fetchDetailTask = (id, setTask) => async (dispatch) => {
  try {
    let response = await tasksAPI.getTask(id);
    setTask(response.data)
  } catch (err) {
    console.log('Something failed')
  }
};

export const setBoards = (boards) => ({
    type: 'SET_BOARDS',
    payload: boards
});

export const setSearchBoards = (boards) => ({
    type: 'SET_SEARCH_BOARDS',
    payload: boards
});

export const clearBoards = () => ({
    type: 'CLEAR_BOARDS',
});

export const setTotalCount = (totalCount) => ({
    type: 'SET_TOTAL_COUNT',
    payload: totalCount
});

export const addTaskAction = (task, id) => ({
    type: 'ADD_TASK',
    payload: { task, listId: id }
});

export const deleteTaskAction = (id, listId) => ({
    type: 'DELETE_TASK',
    payload: {id, listId}
});

export const setCurrentPage = (currentPage) => ({
    type: 'SET_CURRENT_PAGE',
    payload: currentPage
});

export const setLoading = (body) => ({
    type: 'SET_LOADED',
    payload: body
});

export const setFetching = (body) => ({
    type: 'SET_FETCHING',
    payload: body
});