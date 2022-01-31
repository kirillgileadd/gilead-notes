import { combineReducers } from 'redux';
import { boards } from './boards';
import { filter } from './filter';
import { categories } from './categories';

const rootReducer = combineReducers({
  boards,
  filter,
  categories
})

export default rootReducer