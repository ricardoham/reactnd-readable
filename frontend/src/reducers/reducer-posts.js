import {
  FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE, FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
  ADD_POST_SUCCESS, ADD_POST_FAILURE, DELETE_POST, FETCH_POST_CATEGORY_SUCCESS, EDIT_POST_SUCCESS,
} from '../actions/actions-types';

const INITIAL_STATE = {
  postsData: undefined,
  postData: undefined,
  postAddData: undefined,
  postEditData: undefined,
  error: undefined,
  loading: true,
  success: false,
  isDetails: false,
};

export default function (state = INITIAL_STATE, action) {
  console.log('MY POST', action);

  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        postsData: action.payload,
        loading: false,
        postData: undefined,
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
        postData: undefined,
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
        postAddData: action.payload,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        postEditData: action.payload,
      };
    // case DELETE_POST:
    // console.log('assssas', state);
    //   return state.filter(postData => postData.id !== action.payload.id);
      case  DELETE_POST:
        return {
          postsData: state.postsData.filter(post =>
            post.id !== action.payload.id  
          )}
    default:
      return state;
  }
}
