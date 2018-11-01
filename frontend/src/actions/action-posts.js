import axios from 'axios';
import {
  FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE,
  FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
  ADD_POST_SUCCESS, ADD_POST_FAILURE,
} from './actions-types';

const ROOT_URL = 'http://localhost:3001';

export function fetchAllPosts() {
  return dispatch => (
    axios.get(`${ROOT_URL}/posts`, {
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

export function fetchPost(id) {
  return dispatch => (
    axios.get(`${ROOT_URL}/posts/${id}`, {
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

export function addPost(id, timestamp, title, body, author, category) {
  return dispatch => (
    axios.post(`${ROOT_URL}/posts`, {
      headers: { Authorization: 'whatever-you-want' },
      params: {
        id,
        timestamp,
        title,
        body,
        author,
        category,
      },
    }).then(() => dispatch({
      type: ADD_POST_SUCCESS,
    }))
      .catch(response => dispatch({
        type: ADD_POST_FAILURE,
        error: response.error,
      }))
  );
}
