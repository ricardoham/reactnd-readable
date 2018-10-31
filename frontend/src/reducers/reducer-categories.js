import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../actions/actions-types';

const INITIAL_STATE = { categoriesData: undefined, error: undefined, loading: true };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesData: action.payload,
        loading: false,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categoriesData: {},
        error: action.payload.error,
      };
    default:
      return state;
  }
}
