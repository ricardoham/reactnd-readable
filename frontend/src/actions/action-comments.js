import axios from 'axios';
import uuidv4 from 'uuid/v4';
import { ROOT_URL, headers } from '../utils/constants';
import {
  FETCH_ALL_COMMENTS_SUCCESS, FETCH_ALL_COMMENTS_FAILURE,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  EDIT_COMMENT_SUCCESS, EDIT_COMMENT_FAILURE,
  FETCH_SINGLE_COMMENT_SUCCESS, FETCH_SINGLE_COMMENT_FAILURE,
  DELETE_COMMENT_SUCCESS, VOTE_SCORE_COMMENTS_SUCCESS, VOTE_SCORE_COMMENTS_FAILURE,
} from './actions-types';

axios.defaults.headers.common['Authorization'] = headers; /*eslint-disable-line*/

export function fetchAllComments(postId) {
  return dispatch => (
    axios.get(`${ROOT_URL}/posts/${postId}/comments`).then(response => dispatch({
      type: FETCH_ALL_COMMENTS_SUCCESS,
      payload: response.data,
    }))
      .catch(error => dispatch({
        type: FETCH_ALL_COMMENTS_FAILURE,
        error: error.status,
      }))
  );
}

export function fetchComment(id) {
  return dispatch => (
    axios.get(`${ROOT_URL}/comments/${id}`).then(response => dispatch({
      type: FETCH_SINGLE_COMMENT_SUCCESS,
      payload: response.data,
    }))
      .catch(error => dispatch({
        type: FETCH_SINGLE_COMMENT_FAILURE,
        error,
      }))
  );
}

export function addComments(values, parentId) {
  const { body, author } = values;

  const newValues = {
    ...values,
    id: uuidv4(),
    timestamp: Date.now(),
    body,
    author,
    parentId,
  };
  return dispatch => (
    axios.post(`${ROOT_URL}/comments`, newValues).then(response => dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: response.data,
    }))
      .catch(error => dispatch({
        type: ADD_COMMENT_FAILURE,
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

export function deleteComment(id) {
  return dispatch => (
    axios.delete(`${ROOT_URL}/comments/${id}`).then(() => {
      dispatch({
        type: DELETE_COMMENT_SUCCESS,
        payload: id,
      });
    })
  );
}

export function voteScoreComments(id, vote) {
  return dispatch => (
    axios.post(`${ROOT_URL}/comments/${id}`, { option: vote }).then(response => dispatch({
      type: VOTE_SCORE_COMMENTS_SUCCESS,
      payload: response.data,
    }))
      .catch(response => dispatch({
        type: VOTE_SCORE_COMMENTS_FAILURE,
        error: response.status,
      }))
  );
}
