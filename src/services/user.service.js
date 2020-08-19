import axios from 'axios';
import { urlServer } from '../../constants';

export async function updateUserPosts(newPubs) {
  const { token, username } = JSON.parse(localStorage.getItem('user'));
  console.log(`in service:`);
  console.log(newPubs);
  try {
    const res = await axios({
      url: `${urlServer}/posts/${username}/updatePosts`,
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        authorization: token,
      },
      data: newPubs,
    });
    if (res.status === 400) {
      throw new Error('bad request: could not update user publications');
    }
    localStorage.setItem('user', JSON.stringify({ ...res.data, token }));
    return res;
  } catch (error) {
    console.log(`error updating user publications: ${error.message}`);
  }
}
