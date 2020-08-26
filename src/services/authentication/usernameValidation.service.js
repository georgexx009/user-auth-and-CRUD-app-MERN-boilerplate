import { logError } from '../catch.service';

export const usernameValidation = async data => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/authentication/validateUsername`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    return res.status;
  } catch (err) {
    return logError(err);
  }
};
