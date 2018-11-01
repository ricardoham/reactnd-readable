import { FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE } from '../actions/actions-types';

const INITIAL_STATE = { postsData: undefined, error: undefined, loading: true };

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
    default:
      return state;
  }
}
