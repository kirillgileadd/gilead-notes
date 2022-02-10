import axios from 'axios';

const instance = axios.create({
  baseURL: ``,
  headers: {
    'Content-Type': 'application/json'
  },
})

export const boardsAPI = {
  getBoards(page, currentCategoryItem) {
    return instance.get(`tasks?_limit=10&${page ? `_page=${page}` : ''}&${currentCategoryItem ? `category=${currentCategoryItem?.name}` : ''}`)
  },
  searchTasks(page, currentCategoryItem, search) {
    return instance.get( `tasks?_limit=10&${page ? `_page=${page}` : ''}&${currentCategoryItem ? `category=${currentCategoryItem?.name}` : ''}&${search ? `q=${search}` : ''}`)
  }
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
