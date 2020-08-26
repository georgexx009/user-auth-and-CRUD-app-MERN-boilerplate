import bcrypt from 'bcryptjs';
import axios from 'axios';
import { logError } from '../catch.service';

export const userRegistration = async data => {
  const password = data.password;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  data['password'] = hash;
  data['admin'] = false;
  try {
    const res = await axios({
      method: 'post',
      url: `${process.env.API_URL}/authentication/register`,
      data: JSON.stringify(data),
    });
    return res;
  } catch (err) {
    return logError(err);
  }
};
