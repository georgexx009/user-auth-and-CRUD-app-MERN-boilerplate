import axios from 'axios';
import { urlServer } from '../../constants';
import { logError } from './catch.service';

export async function retrieveAllPosts() {
  try {
    const res = await axios.get(`${urlServer}/posts`, {
      headers: {
        accept: 'application/json',
      },
    });
    if (res.status === 400) {
      throw new Error('bad request: could not retrieve all posts');
    }
    return res.data;
  } catch (err) {
    return logError(err);
  }
}

export async function retrieveProfilePosts() {
  const { publications, token } = JSON.parse(localStorage.getItem('user'));
  try {
    const res = await axios({
      url: `${urlServer}/posts/userPosts`,
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        authorization: token,
      },
      data: publications,
    });
    if (res.status === 400) {
      throw new Error('bad request: could not retrieve publications');
    }
    return res.data;
  } catch (err) {
    console.error(`error in retrieve publications: ${err.message}`);
  }

  return [];
}

export async function savePub(newPub) {
  const { token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${urlServer}/posts/savePost`,
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        authorization: token,
      },
      data: newPub,
    });
    if (res.status === 400) {
      throw new Error('bad request: could not save new publication');
    }
    return res.data; //doc created
  } catch (error) {
    return logError(err);
  }
}

export async function deletePost(postId) {
  const { token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${urlServer}/posts/${postId}`,
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
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
