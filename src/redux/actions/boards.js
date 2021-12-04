import axios from 'axios';

export const fetchBoards = (sortBy, category) => (dispatch) =>  {
  dispatch(setLoaded(false))
  axios.get('http://localhost:3001/items').then(({data}) => {
    dispatch(setBoards(data))
  })
}

export const setBoards = (boards) => {
  return {
    type: 'SET_BOARDS',
    payload: boards
  }
}

export const addTaskAction = (task, id) => {
  return {
    type: 'ADD_TASK',
    payload: task,
    listId: id
  }
}

export const setLoaded = (body) => {
  return {
    type: 'SET_LOADED',
    payload: body
  }
}