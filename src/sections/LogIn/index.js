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

const LogIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(initFormState);

  const onChange = event => {
    const { name, value } = event.target;
    setFormState(prevFormState => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const onSubmit = async e => {
    e.preventDefault();
    const res = await loginService({ ...formState });
    if (res.status === 200) {
      setFormState(initFormState);
      displaySnackbar(successLoginSnackbar, dispatch);
      const fullUserInfo = { ...res.data.user, token: res.data.token };
      localStorage.setItem('user', JSON.stringify(fullUserInfo));
      dispatch(setUserData(fullUserInfo));
      history.push('/');
    } else {
      displaySnackbar(errorLoginSnackbar, dispatch);
    }
  };

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
