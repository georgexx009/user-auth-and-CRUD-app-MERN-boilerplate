import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { snackbarActions } from '../actions';

export const useSnackbar = () => {
  const dispatch = useDispatch();
  const [snackbarInfo, setSnackbarInfo] = useState({
    show: false,
    type: 'default',
    label: '',
  });

  const displaySnackbar = (type, label) => {
    dispatch(
      snackbarActions.setAllData(
        ...Object.values({
          show: true,
          type,
          label,
        })
      )
    );
    setTimeout(() => {
      dispatch(snackbarActions.setShow(false));
    }, 2000);
  };

  const hideSnackbar = () => {
    dispatch(snackbarActions.setShow(false));
  };

  return { displaySnackbar, hideSnackbar };
};
