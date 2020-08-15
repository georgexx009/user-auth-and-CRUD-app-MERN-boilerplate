import React, { useState } from 'react';
import './index.scss';

import Button from '../../presentational/Button';
import Snackbar from '../../presentational/Snackbar';

import {
  onSubmit,
  onChange,
  originalFormState,
  handleAlertCloseBtn,
  handleOnBlur,
  snackbarInfoUserTaken,
} from './utils';

const Registration = () => {
  const [formState, setFormState] = useState(originalFormState);
  const [snackbarInfo, setSnackbarInfo] = useState({
    show: false,
    type: 'default',
    label: '',
  });

  return (
    <>
      <div className="registration">
        <div className="card-login">
          <header>
            <p>Registration</p>
          </header>

          <form
            onSubmit={e =>
              onSubmit(e, formState, setFormState, setSnackbarInfo)
            }
          >
            <div className="body">
              <input type="hidden" value="password" />
              <p>First name:</p>
              <input
                name="firstName"
                placeholder="first name ..."
                value={formState.firstName}
                onChange={e => onChange(e, formState, setFormState)}
              />
              <p>Last name:</p>
              <input
                name="lastName"
                placeholder="last name ..."
                value={formState.lastName}
                onChange={e => onChange(e, formState, setFormState)}
              />

              <p>User name</p>
              <input
                name="userName"
                placeholder="user name ..."
                //className="userNameTaken"
                className={`${
                  snackbarInfo.label === snackbarInfoUserTaken.label &&
                  'userNameTaken'
                }`}
                value={formState.userName}
                onChange={e => onChange(e, formState, setFormState)}
                onBlur={e => handleOnBlur(e, setSnackbarInfo)}
                autoComplete="new-password"
              />

              <p>Password</p>
              <input
                name="password"
                type="password"
                placeholder="password ..."
                value={formState.password}
                onChange={e => onChange(e, formState, setFormState)}
                autoComplete="new-password"
              />
            </div>

            <div className="footer">
              <Button
                lbl="Register"
                type="submit"
                disabled={snackbarInfo.show}
              />
            </div>
          </form>
          <p style={{ marginTop: '30px' }}>
            After register, go to log in section to log
          </p>
        </div>
      </div>
      <Snackbar
        mounted={snackbarInfo.show}
        handleAlertCloseBtn={() =>
          handleAlertCloseBtn(snackbarInfo, setSnackbarInfo)
        }
        label={snackbarInfo.label}
        type={snackbarInfo.type}
      />
    </>
  );
};

export default Registration;
