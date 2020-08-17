import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

// custom hooks
import {
  useStateForm,
  useSnackbar,
  useValidateUsername,
  useRegistration,
} from '../../hooks';
import Button from '../../componentsV2/UI/button';

const initialFormState = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
};

const Registration = () => {
  const history = useHistory(); // hook for manage react router

  // hook for manage form state
  const { formState, onChange, resetForm } = useStateForm(initialFormState);

  // display func parameters: type snackbar and label
  const { displaySnackbar, hideSnackbar } = useSnackbar();

  // hook paramaters: handleUsernameAvailable, handleUsernameTaken
  const {
    handleValidateUsername, // func to trigger the validation
    statusUsernameAvailable, // return current status of validation
  } = useValidateUsername(hideSnackbar, () => {
    displaySnackbar('error', 'User name already taken!');
  });

  // formState, handleSuccess, handleRailure
  const { onSubmit } = useRegistration(
    formState, // this is a reference type
    () => {
      resetForm();
      displaySnackbar('success', 'User registered successfully!');
      history.push('/'); // move to main page
    },
    () => {
      displaySnackbar('error', 'Error in registration :(');
    }
  );

  return (
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

            <p>Username</p>
            <input
              name="username"
              placeholder="user name ..."
              className={`${
                statusUsernameAvailable === false
                  ? 'usernameTaken'
                  : statusUsernameAvailable === true && 'usernameAvailable'
              }`}
              value={formState.username}
              onChange={onChange}
              onBlur={handleValidateUsername}
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
            <Button lbl="Register" type="submit" />
            <a onClick={() => history.push('/login')}>
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
