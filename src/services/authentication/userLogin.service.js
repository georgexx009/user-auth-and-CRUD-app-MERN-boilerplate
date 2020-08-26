import { logError } from '../catch.service';
import axios from 'axios';

export const userLogin = async data => {
  try {
    const res = await axios({
      method: 'post',
      url: `${process.env.API_URL}/authentication/login`,
      data: JSON.stringify(data),
    });
    return res;
  } catch (err) {
    return logError(err);
  }
};
