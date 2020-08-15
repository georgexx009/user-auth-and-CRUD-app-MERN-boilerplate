import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './index.scss';
import {
  updateUsernameHeader,
  setUserData,
  snackbarActions,
} from '../../actions';
import {
  userRegistration,
  usernameValidation,
} from '../../services/register/registrationService';
import {
  snackbarInfoError,
  snackbarInfoSuccess,
  snackbarInfoUserTaken,
  initialFormState,
} from './utils';
import { automaticCloseSnackbar } from '../../componentsV2/UI/Snackbar/utils';
import Button from '../../componentsV2/UI/button';
import { useHistory } from 'react-router-dom';

const Registration = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(initialFormState);
  const [usernameAvailable, setUsernameAvailable] = useState();
  const [snackbarInfo, setSnackbarInfo] = useState({
    show: false,
    type: 'default',
    label: '',
  });

  const onChange = event => {
    const { name, value } = event.target;
    setFormState(formState => ({
      ...formState,
      [name]: value,
    }));
  };

  const handleOnBlur = async e => {
    const { value } = e.target;
    const data = {
      userName: value,
    };
    const isUsernameTaken = await usernameValidation(data);
    if (isUsernameTaken === 204) {
      setSnackbarInfo(snackbarInfoUserTaken);
      dispatch(
        snackbarActions.setAllData(...Object.values(snackbarInfoUserTaken))
      );
      setTimeout(() => {
        dispatch(snackbarActions.setShow(false));
      }, 2000);

      setUsernameAvailable(false);
    } else {
      setUsernameAvailable(true);
      setSnackbarInfo({
        show: false,
        type: 'default',
        label: '',
      });
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const registrationRes = await userRegistration(formState);
    console.log(registrationRes);
    if (registrationRes.status === 200) {
      console.log(registrationRes);
      dispatch(updateUsernameHeader(registrationRes.data.user.userName));
      const fullUser = {
        ...registrationRes.data.user,
        token: registrationRes.data.token,
      };
      localStorage.setItem('user', JSON.stringify(fullUser));
      dispatch(setUserData(fullUser));
      setFormState(initialFormState);
      dispatch(
        snackbarActions.setAllData(...Object.values(snackbarInfoSuccess))
      );
      setTimeout(() => {
        dispatch(snackbarActions.setShow(false));
      }, 2000);
      history.push('/');
    } else {
      setSnackbarInfo(snackbarInfoError);
      dispatch(snackbarActions.setAllData(...Object.values(snackbarInfoError)));
      setTimeout(() => {
        dispatch(snackbarActions.setShow(false));
      }, 2000);
    }
  };

  return (
    <>
      <section className="registration-section">
        <div className="card-login">
          <header>
            <p>Registration</p>
          </header>

          <form onSubmit={onSubmit}>
            <div className="body">
              <input type="hidden" value="password" />
              <p>First name:</p>
              <input
                name="firstName"
                placeholder="first name ..."
                value={formState.firstName}
                onChange={onChange}
              />
              <p>Last name:</p>
              <input
                name="lastName"
                placeholder="last name ..."
                value={formState.lastName}
                onChange={onChange}
              />

              <p>User name</p>
              <input
                name="userName"
                placeholder="user name ..."
                className={`${
                  usernameAvailable === false
                    ? 'usernameTaken'
                    : usernameAvailable === true && 'usernameAvailable'
                }`}
                value={formState.userName}
                onChange={onChange}
                onBlur={handleOnBlur}
                autoComplete="new-password"
              />

              <p>Password</p>
              <input
                name="password"
                type="password"
                placeholder="password ..."
                value={formState.password}
                onChange={onChange}
                autoComplete="new-password"
              />
            </div>
            <div className="footer">
              <Button
                lbl="Register"
                type="submit"
                disabled={snackbarInfo.show}
              />
              <a onClick={() => history.push('/login')}>
                Already have an account?
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Registration;
