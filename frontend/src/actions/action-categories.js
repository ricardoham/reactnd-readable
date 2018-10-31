import axios from 'axios';
import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from './actions-types';

const ROOT_URL = 'http://localhost:3001';

export default function fetchCategories() {
  const url = `${ROOT_URL}/categories`;
  return dispatch => (
    axios.get(url, {
      headers: {
        Authorization: 'whatever-you-want',
      },
    }).then(response => dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: response.data,
    }))
      .catch(response => dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        error: response.error,
      }))
  );
}
