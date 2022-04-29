import { boardsAPI, tasksAPI } from '../../api/api';

export const fetchBoards = (currentPage = 1, currentCategoryItem, debouncedSearchTerm) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    let response = await boardsAPI.getBoards(currentPage, currentCategoryItem, debouncedSearchTerm);
    dispatch(setBoards(response.data));
    dispatch(setTotalCount(response.headers['x-total-count']));
  } catch (err) {
    console.log('Something failed');
  } finally {
    dispatch(setFetching(false));
  }
};

export const deleteTaskThunk = (id, listId) => async (dispatch) => {
  try {
    let response = await tasksAPI.deleteTask(id);
    if(response.status === 200) {
      dispatch(deleteTaskAction(id, listId));
    }
  } catch (err) {
    console.log(err);
  }
};

export const postTaskThunk = (newTask, listId) => async (dispatch) => {
  try {
    let response = await tasksAPI.postTask(newTask);
    dispatch(addTaskAction(response.data, listId));
  } catch (err) {
    console.log('Something failed');
  }
};

export const onDrugEndThunk = (result, columns) => async (dispatch) => {
  try {
    const { source, destination, draggableId } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.tasks];
      const destItems = [...destColumn.tasks];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      let newListonTask = {
        ...destItems.find((el) => el.id === Number(draggableId)),
        listId: parseInt(destination.droppableId.match(/\d+/))
      };
      dispatch(listDragEnd(source, sourceItems, destination, destItems));
      const response = await tasksAPI.putTaskListId([Number(draggableId)], newListonTask);
      dispatch(putTaskAction(response.data))
    } else {
      const sourceColumn = columns[source.droppableId];
      const sourceItems = [...sourceColumn.tasks];
      const [removed] = sourceItems.splice(source.index, 1);
      sourceItems.splice(destination.index, 0, removed);
      dispatch(onDragEndAction(source, sourceItems));
    }
  } catch (err) {
    console.log(err);
  }
};

export const setBoards = (boards) => ({
  type: 'SET_BOARDS',
  payload: boards
});

export const clearBoards = () => ({
  type: 'CLEAR_BOARDS'
});

export const setTotalCount = (totalCount) => ({
  type: 'SET_TOTAL_COUNT',
  payload: totalCount
});

export const addTaskAction = (task) => ({
  type: 'ADD_TASK',
  payload: task
});

export const deleteTaskAction = (id, listId) => ({
  type: 'DELETE_TASK',
  payload: { id, listId }
});
export const putTaskAction = (task) => ({
  type: 'PUT_TASK',
  payload: task
});

export const setCurrentPage = (currentPage) => ({
  type: 'SET_CURRENT_PAGE',
  payload: currentPage
});

export const setSearchValue = (value) => ({
  type: 'SET_SEARCH_VALUE',
  payload: value
});

export const setLoading = (body) => ({
  type: 'SET_LOADED',
  payload: body
});

export const setFetching = (body) => ({
  type: 'SET_FETCHING',
  payload: body
});

export const onDragEndAction = (source, sourceItems) => ({
  type: 'DRAG_END',
  payload: { source, sourceItems }
});

export const listDragEnd = (source, sourceItems, destination, destItems) => ({
  type: 'LIST_DRAG_END',
  payload: { source, sourceItems, destination, destItems }
});