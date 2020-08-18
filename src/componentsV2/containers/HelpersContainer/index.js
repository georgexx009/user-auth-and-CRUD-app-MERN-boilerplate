import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Snackbar from '../../UI/Snackbar';
import { snackbarActions } from '../../../actions';
import { useGetLocalUser } from '../../../hooks';

const HelpersContainer = () => {
  const snackbarData = useSelector(state => state.snackbarData);
  const dispatch = useDispatch();

  // set user data on redux store from browser local storage
  useGetLocalUser();

  return (
    <>
      <Snackbar
        mounted={snackbarData.show || false}
        handleAlertCloseBtn={() => dispatch(snackbarActions.setShow(false))}
        label={snackbarData.label}
        type={snackbarData.type}
      />
    </>
  );
};

export default HelpersContainer;
