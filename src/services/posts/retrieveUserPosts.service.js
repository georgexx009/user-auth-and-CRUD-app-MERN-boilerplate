import axios from 'axios';
import { logError } from '../catch.service';
import { formatUserPosts } from '../../helpers/formatPosts';

export async function retrieveUserPosts() {
  const { username, token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${process.env.API_URL}/posts/${username}`,
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        authorization: token,
      },
    });
    if (res.status === 400) {
      throw new Error('bad request: could not retrieve publications');
    }
    return formatUserPosts(res.data);
  } catch (err) {
    return logError(err);
  }

  return [];
}
