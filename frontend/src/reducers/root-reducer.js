import { combineReducers } from 'redux';
import postsCategories from './reducer-categories';
import postsReducer from './reducer-posts';
import commentsReducer from './reducer-comments';
import postsSortReducer from './reducer-posts-sort';

const rootReducer = combineReducers({
  categories: postsCategories,
  posts: postsReducer,
  comments: commentsReducer,
  postsSort: postsSortReducer,
});

export default rootReducer;
