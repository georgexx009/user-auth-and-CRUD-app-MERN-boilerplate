import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUserData } from '../actions';

export const useLogOff = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logOff = () => {
    dispatch(deleteUserData());
    localStorage.removeItem('user');
    history.push('/');
  };

  return { logOff };
};
