import { SET_PUBS_TO_STATE, SET_NEW_PUB } from '../actions/types';

export function publicationsReducer(state = {}, action) {
  switch (action.type) {
    case SET_PUBS_TO_STATE:
      return [...action.payload.newPubs];
    case SET_NEW_PUB:
      return [...state, action.payload.newPub];
    default:
      return state;
  }
}
