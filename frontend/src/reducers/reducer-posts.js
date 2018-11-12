import _ from 'lodash';
import {
  FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE, FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
  ADD_POST_SUCCESS, ADD_POST_FAILURE, DELETE_POST, FETCH_POST_CATEGORY_SUCCESS,
} from '../actions/actions-types';

const INITIAL_STATE = {
  postsData: undefined,
  error: undefined,
  loading: true,
  success: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        postsData: action.payload,
        loading: false,
      };
    case FETCH_ALL_POSTS_FAILURE:
      return {
        ...state,
        postsData: {},
        error: action.payload.error,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        loading: false,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        postData: {},
        loading: false,
      };
    case FETCH_POST_CATEGORY_SUCCESS:
      return {
        ...state,
        postsDataCategory: action.payload,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        success: true,
        error: undefined,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
