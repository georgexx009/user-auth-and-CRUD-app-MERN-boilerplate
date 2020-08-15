import {
  SET_PUBS_TO_STATE,
  API,
  SET_CARDS_TO_STATE,
  SET_MODAL_DATA,
  SET_NEW_PUB,
} from './types';
export * from './user.actions';
export * from './snackbar.action';
export * from './posts.actions';

export function getCards() {
  return {
    type: API,
    payload: {
      method: 'GET',
      url: 'http://localhost:3001/wiki',
      onSuccess: setPubsToState,
    },
  };
}

export function generalFetch({ url, method, body, onSuccess, token }) {
  return {
    type: API,
    payload: {
      url,
      method,
      body,
      token,
      onSuccess,
    },
  };
}

export function setPubsToState(newPubs) {
  return {
    type: SET_CARDS_TO_STATE,
    payload: {
      newPubs,
    },
  };
}

export function setModalData(newModalData) {
  return {
    type: SET_MODAL_DATA,
    payload: {
      newModalData,
    },
  };
}

export function updatePubs(newPubs) {
  return {
    type: SET_PUBS_TO_STATE,
    payload: {
      newPubs,
    },
  };
}

export function setNewPub(newPub) {
  return {
    type: SET_NEW_PUB,
    payload: {
      newPub,
    },
  };
}
