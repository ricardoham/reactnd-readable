import axios from 'axios';
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_POST_CATEGORY_SUCCESS,
  FETCH_POST_CATEGORY_FAILURE,
} from './actions-types';
import { ROOT_URL, headers } from '../utils/constants';

axios.defaults.headers.common['Authorization'] = headers;

export default function fetchCategories() {
  return dispatch => (
    axios.get(`${ROOT_URL}/categories`).then(response => dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: response.data,
    }))
      .catch(response => dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        error: response.error,
      }))
  );
}

export function fetchPostCategory(category) {
  return dispatch => (
    axios.get(`${ROOT_URL}/${category}/posts`).then(response => dispatch({
      type: FETCH_POST_CATEGORY_SUCCESS,
      payload: response.data,
    }))
      .catch(response => dispatch({
        type: FETCH_POST_CATEGORY_FAILURE,
        error: response.error,
      }))
  );
}
