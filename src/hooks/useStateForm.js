import { useState } from 'react';

// this custom hook is used to manage the state from any form
// only needs the initial state, that will be an object with each input
// that will handle as property
export const useStateForm = initialState => {
  const [formState, setFormState] = useState(initialState);

  const onChange = event => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return { formState, onChange, resetForm };
};
