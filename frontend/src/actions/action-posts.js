import axios from 'axios';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './actions-types';

const ROOT_URL = 'http://localhost:3001/';

export function fetchPosts() {
  const url = `${ROOT_URL}/posts`;
  return dispatch => (
    axios.get()
  );
}
