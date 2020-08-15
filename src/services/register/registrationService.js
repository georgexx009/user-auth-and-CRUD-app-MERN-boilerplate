import bcrypt from 'bcryptjs';
import { urlServer } from '../../../constants';
import axios from 'axios';

export const userRegistration = async data => {
  const password = data.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  data['password'] = hash;
  data['admin'] = false;
  const res = await axios({
    method: 'post',
    url: `${urlServer}/registration/register`,
    data: JSON.stringify(data),
  });
  return res;
};

export const usernameValidation = async data => {
  const res = await fetch(`${urlServer}/registration/validateUsername`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.status;
};
