import axios from 'axios';
import { logError } from '../catch.service';

export async function deletePost(postId) {
  const { token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${process.env.API_URL}/posts/${postId}`,
      method: 'delete',
      headers: {
        authorization: token,
      },
    });
    if (res.status !== 200 && res.status !== 204) {
      throw new Error('the request was not successful');
    }
    return res.status; //RETURN STATUS OR DATA WITHOUT THE ELEMENT
  } catch (err) {
    return logError(err);
  }
}
