import axios from 'axios';

const instance = axios.create({
  baseURL: ``,
  headers: {
    'Content-Type': 'application/json'
  },
})

export const boardsAPI = {
  getBoards(currentCategoryItem, search) {
    return instance.get(`/tasks`, {
      params: {
        category: currentCategoryItem,
        q: search,
      }
    })
  },
}

export const tasksAPI = {
  getTask(id) {
    return instance.get(`tasks/${id}`)
  },
  putTaskListId(tasksId, newTask) {
    return instance.put(`tasks/${tasksId}`, {
      ...newTask
    })
  },
  deleteTask(id) {
    return instance.delete(`tasks/${id}`)
  },
  postTask(task) {
    return axios.post(`/tasks`, {
      ...task
    } )
  },
}

export const categoryAPI = {
  postCategory(category) {
    return axios.post(`/categories`, {
      ...category
    } )
  },
  getCategories() {
    return instance.get(`categories`)
  },
  deleteCategory(id) {
    return instance.delete(`categories/${id}`)
  },
}
