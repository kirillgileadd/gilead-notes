import { boardsAPI } from '../../api/api';

export const fetchBoards = (page, currentCategoryItem ) => async (dispatch) => {
  dispatch(setLoaded(false));
  let response = await boardsAPI.getBoards(1, currentCategoryItem);
  dispatch(setBoards(response.data));
};

export const setBoards = (boards) => ({
    type: 'SET_BOARDS',
    payload: boards
});

export const addTaskAction = (task, id) => ({
    type: 'ADD_TASK',
    payload: { task, listId: id }
});

export const setLoaded = (body) => ({
    type: 'SET_LOADED',
    payload: body
});