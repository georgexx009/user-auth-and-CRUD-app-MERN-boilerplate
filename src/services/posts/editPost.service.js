import axios from 'axios';
import { logError } from '../catch.service';

export async function editPost(postId, newPostContent) {
  const { token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${urlServer}/posts/${postId}`,
      method: 'put',
      headers: {
        'Content-type': 'application/json',
        authorization: token,
      },
      data: newPostContent,
    });
    if (res.status === 400) {
      throw new Error('the request was not successful');
    }
    return res;
  } catch (err) {
    return logError(err);
  }
}
