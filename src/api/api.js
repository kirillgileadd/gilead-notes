import axios from 'axios';

const instance = axios.create({
  baseURL: `/`,
  headers: {
    'Content-Type': 'application/json'
  },
})

export const boardsAPI = {
  getBoards(page, currentCategoryItem) {
    return instance.get(`tasks?_limit=6&${page ? `_page=${page}` : ''}&${currentCategoryItem ? `category=${currentCategoryItem?.name}` : ''}`)
  },
  deleteTask(id) {
    return instance.delete(`tasks/${id}`)
  },
  postTask(task) {
    return axios.post(`/tasks`, {
      ...task
    } )
  },
  postCategory(category) {
    return axios.post(`/categories`, {
      ...category
    } )
  },
  getCategories() {
    return instance.get(`categories`)
  },
  changeCategories(currentCategoryItem) {
    return instance.get(`tasks?${currentCategoryItem ? `category=${currentCategoryItem?.name}` : ''}&_page=1&_limit=6`)
  },
}

export const tasksAPI = {
  getTask(id) {
    return instance.get(`tasks/${id}`)
  }
}