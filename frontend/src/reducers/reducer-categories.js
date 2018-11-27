import {
  FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE,
  FETCH_POST_CATEGORY_SUCCESS, FETCH_POST_CATEGORY_FAILURE,
} from '../actions/actions-types';

const INITIAL_STATE = {
  categoriesData: undefined,
  postsCategoryData: undefined,
  error: undefined,
  loading: true,
};

export default function (state = INITIAL_STATE, action) {
  console.log('Action category', action);
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesData: action.payload.categories,
        loading: false,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categoriesData: undefined,
        error: action.payload.error,
      };
    // case FETCH_POST_CATEGORY_SUCCESS:
    //   return {
    //     ...state,
    //     postsCategoryData: action.payload,
    //     loading: false,
    //   };
    // case FETCH_POST_CATEGORY_FAILURE:
    //   return {
    //     ...state,
    //     categoriesData: undefined,
    //     error: action.payload.error,
    //   };
    default:
      return state;
  }
}
