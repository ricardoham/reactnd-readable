import { POST_SORT_BY } from '../actions/actions-types';

const INITIAL_STATE = { sortEvent: 'timestamp' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_SORT_BY:
      return {
        ...state, sortEvent: action.payload,
      };
    default:
      return state;
  }
}
