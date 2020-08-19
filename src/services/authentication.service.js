import bcrypt from 'bcryptjs';
import { urlServer } from '../../constants';
import axios from 'axios';
import { logError } from './catch.service';

export const userRegistration = async data => {
  const password = data.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  data['password'] = hash;
  data['admin'] = false;
  try {
    const res = await axios({
      method: 'post',
      url: `${urlServer}/authentication/register`,
      data: JSON.stringify(data),
    });
    return res;
  } catch (err) {
    return logError(err);
  }
};

export const usernameValidation = async data => {
  try {
    const res = await fetch(`${urlServer}/authentication/validateUsername`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return res.status;
  } catch (err) {
    return logError(err);
  }
};

export const userLogin = async data => {
  try {
    const res = await axios({
      method: 'post',
      url: `${urlServer}/authentication/login`,
      data: JSON.stringify(data),
    });
    return res;
  } catch (err) {
    return logError(err);
  }
};
