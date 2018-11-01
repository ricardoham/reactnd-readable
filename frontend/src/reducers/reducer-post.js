import { FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from '../actions/actions-types';

const INITIAL_STATE = { postData: undefined, error: undefined, loading: true };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
