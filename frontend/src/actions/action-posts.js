import axios from 'axios';
import uuidv4 from 'uuid/v4';
import {
  FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE,
  FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
  ADD_POST_SUCCESS, ADD_POST_FAILURE,
  EDIT_POST_SUCCESS, EDIT_POST_FAILURE,
  VOTE_SCORE_POSTS_FAILURE, VOTE_SCORE_POSTS_SUCCESS, DELETE_POST_SUCCESS, DELETE_POST_FAILURE,
} from './actions-types';
import { ROOT_URL, headers } from '../utils/constants';

axios.defaults.headers.common.Authorization = headers;

export function fetchAllPosts() {
  return dispatch => (
    axios.get(`${ROOT_URL}/posts`).then(response => dispatch({
      type: FETCH_ALL_POSTS_SUCCESS,
      payload: response.data,
    }))
      .catch(error => dispatch({
        type: FETCH_ALL_POSTS_FAILURE,
        error,
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
        error: response,
      }))
  );
}

export function addPost(values) {
  const newValues = { ...values, id: uuidv4(), timestamp: Date.now() };
  return dispatch => (
    axios.post(`${ROOT_URL}/posts`, newValues).then(response => dispatch({
      type: ADD_POST_SUCCESS,
      payload: response.data,
    }))
      .catch(response => dispatch({
        type: ADD_POST_FAILURE,
        error: response.status,
      }))
  );
}

export function editPost(id, values) {
  return dispatch => (
    axios.put(`${ROOT_URL}/posts/${id}`, values).then(response => dispatch({
      type: EDIT_POST_SUCCESS,
      payload: response,
    }))
      .catch(response => dispatch({
        type: EDIT_POST_FAILURE,
        error: response.status,
      }))
  );
}

export function deletePost(id, callback) {
  return dispatch => (
    axios.delete(`${ROOT_URL}/posts/${id}`).then(() => {
      callback();
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: id,
      });
    })
      .catch(error => dispatch({
        type: DELETE_POST_FAILURE,
        payload: error,
      }))
  );
}

export function voteScorePosts(id, vote) {
  return dispatch => (
    axios.post(`${ROOT_URL}/posts/${id}`, { option: vote }).then(response => dispatch({
      type: VOTE_SCORE_POSTS_SUCCESS,
      payload: response.data,
    }))
      .catch(response => dispatch({
        type: VOTE_SCORE_POSTS_FAILURE,
        error: response.status,
      }))
  );
}
