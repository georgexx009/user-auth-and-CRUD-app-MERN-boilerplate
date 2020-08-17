import { userRegistration } from '../services';
import { useDispatch } from 'react-redux';
import { setUserData } from '../actions';

export const useRegistration = (formState, handleSuccess, handleFailure) => {
  const dispatch = useDispatch();

  const onSubmit = async event => {
    event.preventDefault();
    console.log(formState);
    const registrationRes = await userRegistration(formState);
    if (registrationRes.status === 200) {
      handleSuccess();
      const fullUser = {
        ...registrationRes.data.user,
        token: registrationRes.data.token,
      };
      localStorage.setItem('user', JSON.stringify(fullUser));
      dispatch(setUserData(fullUser));
    } else {
      handleFailure();
    }
  };

  return { onSubmit };
};
