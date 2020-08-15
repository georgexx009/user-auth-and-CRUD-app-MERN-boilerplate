import { GET_CARDS, SET_CARDS_TO_STATE } from '../actions/types';

export function cardInfoReducer(state = {}, action) {
  switch (action.type) {
    case GET_CARDS:
      return [...state];
    case SET_CARDS_TO_STATE:
      return [...action.payload.newPubs];
    default:
      return state;
  }
}
