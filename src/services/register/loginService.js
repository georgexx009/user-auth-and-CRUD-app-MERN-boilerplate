import { urlServer } from '../../../constants';
import axios from 'axios';

export const loginService = async data => {
  const res = await axios({
    method: 'post',
    url: `${urlServer}/registration/login`,
    data: JSON.stringify(data),
  });
  console.log(res);
  return res;
};
