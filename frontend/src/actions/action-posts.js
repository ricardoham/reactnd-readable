import axios from 'axios';
import { FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE } from './actions-types';

const ROOT_URL = 'http://localhost:3001';

export default function fetchPosts() {
  const url = `${ROOT_URL}/posts`;
  return dispatch => (
    axios.get(url, {
      headers: {
        Authorization: 'whatever-you-want',
      },
    }).then(response => dispatch({
      type: FETCH_ALL_POSTS_SUCCESS,
      payload: response.data,
    }))
      .catch(response => dispatch({
        type: FETCH_ALL_POSTS_FAILURE,
        error: response.error,
      }))
  );
}
