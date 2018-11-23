import { combineReducers } from 'redux';
import postsCategories from './reducer-categories';
import postsReducer from './reducer-posts';
import commentsReducer from './reducer-comments';

const rootReducer = combineReducers({
  categories: postsCategories,
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
