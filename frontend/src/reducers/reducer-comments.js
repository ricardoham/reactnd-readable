import _ from 'lodash';
import {
  FETCH_ALL_COMMENTS_SUCCESS, FETCH_ALL_COMMENTS_FAILURE,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  FETCH_SINGLE_COMMENT_SUCCESS, FETCH_SINGLE_COMMENT_FAILURE,
  VOTE_SCORE_COMMENTS_SUCCESS, FETCH_ALL_POSTS_SUCCESS,
  EDIT_COMMENT_SUCCESS, EDIT_POST_FAILURE,
} from '../actions/actions-types';

const INITIAL_STATE = {
  allCommentsData: undefined,
  singleCommentData: undefined,
  addCommentData: undefined,
  commentVoteData: undefined,
  error: undefined,
  loadingComment: true,
  editedComment: undefined,
};

export default function (state = INITIAL_STATE, action) {
  console.log('Action comments', action);
  switch (action.type) {
    case FETCH_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        allCommentsData: action.payload,
        singleCommentData: undefined,
        commentVoteData: undefined,
        editedComment: undefined,
      };
    case FETCH_ALL_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_SINGLE_COMMENT_SUCCESS:
      return {
        ...state,
        singleCommentData: action.payload,
        loadingComment: false,
        editedComment: undefined,
      };
    case FETCH_SINGLE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        // addCommentData: action.payload,
        allCommentsData: [...state.allCommentsData, action.payload],
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_COMMENT_SUCCESS:
      const test = state.allCommentsData.findIndex(c => c.id === action.payload.id);
      console.log('=-=-=-=-coments data', state.allCommentsData[test], action.payload);
      console.log('Just test', test);
      return {
        ...state,
        allCommentsData: [...state.allCommentsData[test], action.payload],
      };

    case EDIT_POST_FAILURE:
      return {
        ...state,
        allCommentsData: undefined,
        error: action.payload,
      };
    case VOTE_SCORE_COMMENTS_SUCCESS:
      return {
        ...state,
        // allCommentsData: action.payload,
        editedComment: action.payload,
      };
    case FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        allCommentsData: undefined,
      };
    default:
      return state;
  }
}
