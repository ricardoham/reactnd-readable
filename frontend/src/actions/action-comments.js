import axios from 'axios';
import { ROOT_URL, headers } from '../utils/constants';
import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, EDIT_COMMENT_SUCCESS, EDIT_COMMENT_FAILURE } from './actions-types';

axios.defaults.headers.common['Authorization'] = headers;

export function fetchCommentsPost(post_id) {
  return dispatch => (
    axios.get(`${ROOT_URL}/posts/${post_id}/comments`).then(response => dispatch({
      type: FETCH_COMMENTS_SUCCESS,
      payload: response.data,
    }))
      .catch(error => dispatch({
        type: FETCH_COMMENTS_FAILURE,
        error: error.status,
      }))
  );
}

export function fetchComment(post_id) {
  return dispatch => (
    axios.get(`${ROOT_URL}/comments/${post_id}`).then(response => dispatch({
      type: FETCH_COMMENTS_SUCCESS,
      payload: response.data,
    }))
      .catch(error => dispatch({
        type: FETCH_COMMENTS_FAILURE,
        error: error.status,
      }))
  );
}

export function addComments(id, values) {
  return dispatch => (
    axios.post(`${ROOT_URL}/comments/${id}`, values).then(response => dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: response.data,
    }))
      .catch(error => dispatch({
        type: ADD_POST_FAILURE,
        payload: error.status,
      }))
  );
}

export function editComment(id, values) {
  return dispatch => (
    axios.put(`${ROOT_URL}/comments/${id}`, values).then(response => dispatch({
      type: EDIT_COMMENT_SUCCESS,
      payload: response.data,
    }))
      .catch(error => dispatch({
        type: EDIT_COMMENT_FAILURE,
        error: error.status,
      }))
  );
}
