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
        allCommentsData: [...state.allCommentsData, action.payload],
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_COMMENT_SUCCESS:
      const commentIndex = state.allCommentsData.findIndex(c => c.id === action.payload.id);
      state.allCommentsData[commentIndex] = action.payload;
      return {
        ...state,
        allCommentsData: [...state.allCommentsData],
      };

    case EDIT_POST_FAILURE:
      return {
        ...state,
        allCommentsData: undefined,
        error: action.payload,
      };
    case VOTE_SCORE_COMMENTS_SUCCESS:
      const index = state.allCommentsData.findIndex(c => c.id === action.payload.id);
      state.allCommentsData[index] = action.payload;
      return {
        ...state,
        allCommentsData: [...state.allCommentsData],
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
