import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:3001/`
})

export const boardsAPI = {
  getBoards(page, currentCategoryItem) {
    return instance.get(`tasks?_limit=6&${page ? `_page=${page}` : ''}&${currentCategoryItem ? `category=${currentCategoryItem?.name}` : ''}`)
  },
  getCategories() {
    return instance.get(`categories`)
  },
  changeCategories(currentCategoryItem) {
    return instance.get(`tasks?${currentCategoryItem ? `category=${currentCategoryItem?.name}` : ''}&_page=1&_limit=6`)
  },
}