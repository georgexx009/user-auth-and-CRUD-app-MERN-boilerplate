import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Snackbar from '../../presentational/Snackbar';
import { snackbarActions } from '../../../actions';

const HelpersContainer = () => {
  const snackbarData = useSelector((state) => state.snackbarData);
  const dispatch = useDispatch();
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
