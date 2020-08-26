import { useDispatch } from 'react-redux';
// import { userLogin } from '../services';
import authenticationSvc from '../services/authentication';
import { setUserData } from '../actions';

export const useLogin = (formState, handleSuccess, handleFailure) => {
  const { userLogin } = authenticationSvc;
  const dispatch = useDispatch();

  const onSubmit = async event => {
    event.preventDefault();
    const loginRes = await userLogin(formState);
    if (loginRes.status === 200) {
      handleSuccess();
      const fullUser = {
        ...loginRes.data.user,
        token: loginRes.data.token,
      };
      localStorage.setItem('user', JSON.stringify(fullUser));
      dispatch(setUserData(fullUser));
    } else {
      handleFailure();
    }
  };

  return { onSubmit };
};
