import {
  userRegistration,
  usernameValidation,
} from "../../../services/register/registrationService";

export const originalFormState = {
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
};

const snackbarInfoSuccess = {
  show: true,
  type: "success",
  label: "User registered successfully!",
};

const snackbarInfoError = {
  show: true,
  type: "error",
  label: "Error in registration :/",
};

export const snackbarInfoUserTaken = {
  show: true,
  type: "error",
  label: "User name already taken!",
};

export const onSubmit = async (e, formState, setFormState, setSnackbarInfo) => {
  e.preventDefault();
  const data = {
    ...formState,
  };

  //call registration service
  const registerStatus = await userRegistration(data);
  if (registerStatus === 200) {
    setFormState(originalFormState);
    setSnackbarInfo(snackbarInfoSuccess);
    automaticCloseSnackbar(snackbarInfoSuccess, setSnackbarInfo);
  } else {
    setSnackbarInfo(snackbarInfoError);
    automaticCloseSnackbar(snackbarInfoError, setSnackbarInfo);
  }
};

export const onChange = (e, formState, setFormState) => {
  const { name, value } = e.target;
  setFormState((formState) => ({
    ...formState,
    [name]: value,
  }));
};

export const handleAlertCloseBtn = (prevState, setFunc) => {
  setFunc({
    ...prevState,
    show: false,
  });
};

export const automaticCloseSnackbar = async (prevState, setSnackbarInfo) => {
  await setTimeout(() => {
    setSnackbarInfo({ ...prevState, show: false });
  }, 2000);
};

export const handleOnBlur = async (e, setSnackbarInfo) => {
  const { value } = e.target;
  const data = {
    userName: value,
  };
  const isUsernameTaken = await usernameValidation(data);
  if (isUsernameTaken === 204) {
    setSnackbarInfo(snackbarInfoUserTaken);
    automaticCloseSnackbar(snackbarInfoUserTaken, setSnackbarInfo);
  } else {
    setSnackbarInfo({
      show: false,
      type: "default",
      label: "",
    });
  }
};
