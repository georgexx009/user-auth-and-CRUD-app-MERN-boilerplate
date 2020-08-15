export const initialFormState = {
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
};

export const snackbarInfoSuccess = {
  show: true,
  type: 'success',
  label: 'User registered successfully!',
};

export const snackbarInfoError = {
  show: true,
  type: 'error',
  label: 'Error in registration :/',
};

export const snackbarInfoUserTaken = {
  show: true,
  type: 'error',
  label: 'User name already taken!',
};
