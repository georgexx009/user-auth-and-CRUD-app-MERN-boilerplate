import { loginService } from '../../../services/register/loginService';
import { automaticCloseSnackbar } from './utils';
import { SET_PUBS_TO_STATE } from '../../../actions/types';
import { updateUsernameHeader, setUserData } from '../../../actions';
import { snackbarActions } from '../../../actions';

export const originalLoginFormState = {
  userName: '',
  password: '',
};

//mounted, type, label, handleAlertCloseBtn

export const onSubmit = async (
  e,
  formState,
  setFormState,
  setSnackbarInfo,
  history,
  dispatch
) => {
  e.preventDefault();
  const data = {
    ...formState,
  };
  const res = await loginService(data);
  if (res.status === 200) {
    //reset form
    setFormState(originalLoginFormState);

    //snackbar process
    dispatch(
      snackbarActions.setAllData(...Object.values(successLoginSnackbar))
    );
    setTimeout(() => {
      dispatch(snackbarActions.setShow(false));
    }, 2000);

    dispatch(updateUsernameHeader(res.data.user.userName));
    const fullUser = { ...res.data.user, token: res.data.token };
    localStorage.setItem('user', JSON.stringify(fullUser)); //use sessionStorage
    dispatch(setUserData(fullUser));
    history.push('/');
  } else {
    //snackbar process
    dispatch(snackbarActions.setAllData(...Object.values(errorLoginSnackbar)));
    setTimeout(() => {
      dispatch(snackbarActions.setShow(false));
    }, 2000);
  }
};
