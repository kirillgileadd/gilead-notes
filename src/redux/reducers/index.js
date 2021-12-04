import { combineReducers } from 'redux';
import { boards } from './boards';
import { filter } from './filter';

const rootReducer = combineReducers({
  boards,
  filter
})

export default rootReducer