import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/root-reducer';

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default configureStore;
