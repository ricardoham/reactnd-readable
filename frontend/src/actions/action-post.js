import axios from 'axios';
import { FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './actions-types';

const ROOT_URL = 'http://localhost:3001';

export default function fetchPosts(id) {
  const url = `${ROOT_URL}/posts/${id}`;
  return dispatch => (
    axios.get(url, {
      headers: { Authorization: 'whatever-you-want' },
    }).then(response => dispatch({
      type: FETCH_POST_SUCCESS,
      payload: response.data,
    }))
      .catch(response => dispatch({
        type: FETCH_POST_FAILURE,
        error: response.error,
      }))
  );
}
