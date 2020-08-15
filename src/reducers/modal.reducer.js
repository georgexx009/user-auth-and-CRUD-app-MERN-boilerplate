import { SET_MODAL_DATA } from '../actions/types';

export function modalReducer(state = {}, action) {
  switch (action.type) {
    case SET_MODAL_DATA:
      return {
        ...action.payload.newModalData,
      };
    default:
      return state;
  }
}
