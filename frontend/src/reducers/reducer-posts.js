import {
  FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE, FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
  ADD_POST_SUCCESS, ADD_POST_FAILURE, DELETE_POST, FETCH_POST_CATEGORY_SUCCESS, EDIT_POST_SUCCESS,
  VOTE_SCORE_POSTS_SUCCESS,
} from '../actions/actions-types';

const INITIAL_STATE = {
  postsData: undefined,
  postData: undefined,
  postAddData: undefined,
  postEditData: undefined,
  postVoteData: undefined,
  error: undefined,
  loading: true,
  successPost: false,
  isDetails: false,
  deletedPost: false,
};

export default function (state = INITIAL_STATE, action) {
  console.log('REDUCER POST LIST:', action);

  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        postsData: action.payload,
        loading: false,
        postData: undefined,
        postVoteData: undefined,
        successPost: false,
        deletedPost: false,
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
        postsData: action.payload,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        successPost: true,
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
    case DELETE_POST:
      return {
        postsData: state.postsData.filter(post => post.id !== action.payload.id),
        deletedPost: true,
      };
    case VOTE_SCORE_POSTS_SUCCESS:
      console.log('UUUUU', state);
      return {
        ...state,
        postVoteData: action.payload.voteScore,
      };
    default:
      return state;
  }
}
