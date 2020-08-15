import { snackbarConstants } from './types';

export const snackbarActions = {
  setAllData,
  setShow,
};

function setAllData(show, type, label) {
  return {
    type: snackbarConstants.SET_ALL_DATA,
    payload: {
      show,
      type,
      label,
    },
  };
}

function setShow(showStatus) {
  return {
    type: snackbarConstants.SET_SHOW,
    payload: {
      show: showStatus,
    },
  };
}
