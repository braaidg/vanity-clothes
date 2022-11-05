import { combineReducers } from 'redux';

import categoriesReducer from './category/category.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});

export default rootReducer;
