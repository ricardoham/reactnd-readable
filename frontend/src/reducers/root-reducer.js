import { combineReducers } from 'redux';
import postsReducer from './reducer-posts';
import postsCategories from './reducer-categories';

const rootReducer = combineReducers({
  posts: postsReducer,
  categories: postsCategories,
});

export default rootReducer;
