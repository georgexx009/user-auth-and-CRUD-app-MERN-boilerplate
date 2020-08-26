import { useState } from 'react';
import authenticationSvc from '../services/authentication';

export const useValidateUsername = (
  handleUsernameAvailable,
  handleUsernameTaken
) => {
  const { usernameValidation } = authenticationSvc;
  const [statusUsernameAvailable, setStatusUsernameAvailable] = useState();

  const handleValidateUsername = async e => {
    const { value } = e.target;
    const data = {
      username: value,
    };
    const isUsernameTaken = await usernameValidation(data);
    if (isUsernameTaken === 204) {
      handleUsernameAvailable();
      setStatusUsernameAvailable(true);
    } else if (isUsernameTaken === 200) {
      handleUsernameTaken();
      setStatusUsernameAvailable(false);
    }
  };

  return { handleValidateUsername, statusUsernameAvailable };
};
