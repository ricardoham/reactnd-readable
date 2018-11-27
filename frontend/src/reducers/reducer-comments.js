import {
  FETCH_ALL_COMMENTS_SUCCESS, FETCH_ALL_COMMENTS_FAILURE,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  FETCH_SINGLE_COMMENT_SUCCESS, FETCH_SINGLE_COMMENT_FAILURE, VOTE_SCORE_COMMENTS_SUCCESS,
} from '../actions/actions-types';

const INITIAL_STATE = {
  allCommentsData: undefined,
  singleCommentData: undefined,
  addCommentData: undefined,
  commentVoteData: undefined,
  error: undefined,
  loadingComment: true,
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
      };
    case FETCH_SINGLE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentData: action.payload,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case VOTE_SCORE_COMMENTS_SUCCESS:
    console.log('aaaasrrrrrrrrrrrrrrrrrrrrr', action.payload);
      return {
        ...state,
        // allCommentsData: action.payload,
      };
    default:
      return state;
  }
}
