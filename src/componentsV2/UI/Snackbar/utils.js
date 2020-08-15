import { snackbarActions } from '../../../actions';

export const unMountStyle = setFunc => {
  setFunc({
    opacity: 0,
    animation: 'slide-down 1s ease',
  });
};

export const mountStyle = setFunc => {
  setFunc({
    opacity: 1,
    animation: 'slide-up 1s ease',
  });
};

export const animationEnd = (props, setShow) => {
  if (!props.mounted) {
    setShow(false);
  }
};

export const automaticCloseSnackbar = async (prevState, setSnackbarInfo) => {
  setTimeout(() => {
    setSnackbarInfo({ ...prevState, show: false });
  }, 2000);
};

export const displaySnackbar = (type, dispatch) => {
  dispatch(snackbarActions.setAllData(...Object.values(type)));
  setTimeout(() => {
    dispatch(snackbarActions.setShow(false));
  }, 2000);
};
