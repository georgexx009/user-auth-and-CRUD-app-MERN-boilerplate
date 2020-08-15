import { snackbarConstants } from '../actions/types';

export function snackbarReducer(state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case snackbarConstants.SET_ALL_DATA:
      return { ...payload };
    case snackbarConstants.SET_SHOW:
      return {
        ...state,
        show: payload.show,
      };
    default:
      return state;
  }
}
