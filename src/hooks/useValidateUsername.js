import { useState } from 'react';
import { usernameValidation } from '../services';

export const useValidateUsername = (
  handleUsernameAvailable,
  handleUsernameTaken
) => {
  const [statusUsernameAvailable, setStatusUsernameAvailable] = useState();

  const handleValidateUsername = async e => {
    const { value } = e.target;
    const data = {
      username: value,
    };
    const isUsernameTaken = await usernameValidation(data);
    if (isUsernameTaken === 200) {
      handleUsernameAvailable();
      setStatusUsernameAvailable(true);
    } else {
      handleUsernameTaken();
      setStatusUsernameAvailable(false);
    }
  };

  return { handleValidateUsername, statusUsernameAvailable };
};
