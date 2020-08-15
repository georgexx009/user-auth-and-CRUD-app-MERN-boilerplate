import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './index.scss';

import Button from '../../presentational/Button';
import Snackbar from '../../presentational/Snackbar';

import { originalLoginFormState, onSubmit } from './utilsLogin';
import { onChange, handleAlertCloseBtn } from './utils';

import { snackbarActions } from '../../../actions';

const LogIn = () => {
  const [logFormState, setLogFormState] = useState(originalLoginFormState);
  const [snackbarInfo, setSnackbarInfo] = useState({
    show: false,
    type: 'default',
    label: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <div className="log-in">
        <div className="card-login">
          <header>
            <p>Log In</p>
          </header>

          <form
            onSubmit={(e) =>
              onSubmit(
                e,
                logFormState,
                setLogFormState,
                setSnackbarInfo,
                history,
                dispatch
              )
            }
          >
            <div className="body">
              <p>User name</p>
              <input
                name="userName"
                placeholder="user name ..."
                autoComplete="off"
                value={logFormState.userName}
                onChange={(e) => onChange(e, logFormState, setLogFormState)}
              />
              <p>Password</p>
              <input
                name="password"
                type="password"
                placeholder="password ..."
                autoComplete="off"
                value={logFormState.password}
                onChange={(e) => onChange(e, logFormState, setLogFormState)}
              />
            </div>

            <div className="footer">
              <Button lbl="Log In" type="submit" disabled={snackbarInfo.show} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
