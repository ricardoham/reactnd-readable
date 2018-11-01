import { combineReducers } from 'redux';
import postsCategories from './reducer-categories';
import postReducer from './reducer-post';
import postsReducer from './reducer-posts';

const rootReducer = combineReducers({
  categories: postsCategories,
  post: postReducer,
  posts: postsReducer,
});

export default rootReducer;
