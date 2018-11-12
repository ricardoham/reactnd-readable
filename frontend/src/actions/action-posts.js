import axios from 'axios';
import {
  FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE,
  FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
  ADD_POST_SUCCESS, ADD_POST_FAILURE, DELETE_POST,
} from './actions-types';
import { ROOT_URL, headers } from '../utils/constants';

axios.defaults.headers.common['Authorization'] = headers;

export function fetchAllPosts() {
  return dispatch => (
    axios.get(`${ROOT_URL}/posts`).then(response => dispatch({
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
    axios.get(`${ROOT_URL}/posts/${id}`).then(response => dispatch({
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

export function deletePost(id, callback) {
  return dispatch => (
    axios.delete(`${ROOT_URL}/posts/${id}`).then(() => dispatch({
      type: DELETE_POST,
      payload: id,
      callback,
    }))
  );
}
