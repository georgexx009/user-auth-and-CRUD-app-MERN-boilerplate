import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loginService } from '../../services/register/loginService';
import {
  successLoginSnackbar,
  errorLoginSnackbar,
} from '../../componentsV2/UI/Snackbar/snackbar.types';
import { displaySnackbar } from '../../componentsV2/UI/Snackbar/utils';
import { initFormState } from './utils';
import { setUserData } from '../../actions';

import Button from '../../componentsV2/UI/button';

// custom hooks
import { useStateForm, useLogin, useSnackbar } from '../../hooks';

const LogIn = () => {
  const history = useHistory();
  const { displaySnackbar, hideSnackbar } = useSnackbar();

  // form state manager
  const { formState, onChange, resetForm } = useStateForm(initFormState);

  // manage submit
  const { onSubmit } = useLogin(
    formState,
    () => {
      resetForm();
      displaySnackbar('success', 'Welcome!');
      history.push('/');
    },
    () => {
      displaySnackbar('error', 'Please verify the credentials');
    }
  );

  return (
    <section className="log-in-section">
      <div className="card-login">
        <header>
          <p>Log In</p>
        </header>

        <form onSubmit={onSubmit}>
          <div className="body">
            <input type="hidden" value="password" />
            <p>User name</p>
            <input
              name="userName"
              placeholder="user name ..."
              value={formState.userName}
              onChange={onChange}
            />
            <p>Password</p>
            <input
              name="password"
              type="password"
              placeholder="password ..."
              value={formState.password}
              onChange={onChange}
            />
          </div>
          <div className="footer">
            <Button lbl="Log In" type="submit" />
            <a onClick={() => history.push('/registration')}>
              Don't have an account? Create one
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
