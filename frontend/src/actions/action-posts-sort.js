import { POST_SORT_BY } from './actions-types';

export default function postSortBy(sortEvent) {
  return {
    type: POST_SORT_BY,
    payload: sortEvent,
  };
}
