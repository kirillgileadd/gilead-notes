export const fetchTasks = (tasks) => {
  return {
    type: 'FETCH_TASKS',
    payload: tasks
  }
}