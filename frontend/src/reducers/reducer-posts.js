import {
  FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE, FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
  ADD_POST_SUCCESS, ADD_POST_FAILURE, FETCH_POST_CATEGORY_SUCCESS, EDIT_POST_SUCCESS,
  VOTE_SCORE_POSTS_SUCCESS,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  VOTE_SCORE_COMMENTS_FAILURE,
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
  console.log('AAA', action);
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
        isDetails: true,
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
        successPost: true,
        postEditData: action.payload,
      };
    case DELETE_POST_SUCCESS:
      return {
        postsData: state.postsData.filter(post => post.id !== action.payload.id),
        deletedPost: true,
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case VOTE_SCORE_POSTS_SUCCESS:
      console.log('VAU TOMAN NOC', action.payload);
      const index = state.postsData.findIndex(c => c.id === action.payload.id);
      const updatePostVote = [...state.postsData];
      updatePostVote[index] = action.payload;
      return {
        ...state,
        postsData: updatePostVote,
      };
    case VOTE_SCORE_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
