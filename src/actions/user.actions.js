import { userConstants } from './types';
//import { history } from '../helpers';

export const userActions = {
  register,
  login,
  updateUsernameHeader,
  setUserData,
  setUserPubs,
  deleteUserData,
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        dispatch(updateUsernameHeader(user.username));
      },
      error => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
  function updateUsernameHeader(username) {
    return {
      type: userConstants.SET_USERNAME_NAVBAR,
      username,
    };
  }
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      user => {
        dispatch(success());
        history.push('/');
      },
      error => {
        dispatch(failure(error.toString()));
        console.log('ERROR');
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

export function updateUsernameHeader(username) {
  return {
    type: userConstants.SET_USERNAME_NAVBAR,
    username,
  };
}

export function setUserData(userData) {
  return {
    type: userConstants.SET_USER_DATA,
    payload: {
      ...userData,
    },
  };
}

export function setUserPubs(pubs) {
  return {
    type: userConstants.SET_USER_PUBS,
    payload: pubs,
  };
}

export function deleteUserData() {
  return {
    type: userConstants.DELETE_USER_DATA,
  };
}
