import axios from 'axios';
import { urlServer } from '../../constants';
import { logError } from './catch.service';
import { formatAllPosts, formatUserPosts } from '../helpers/formatPosts';

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
    return formatAllPosts(res.data);
  } catch (err) {
    return logError(err);
  }
}

export async function retrieveProfilePosts() {
  const { username, token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${urlServer}/posts/${username}`,
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
    console.error(`error in retrieve publications: ${err.message}`);
  }

  return [];
}

export async function savePost(newPub) {
  const { username, token } = JSON.parse(localStorage.getItem('user'));
  console.log(username);
  try {
    const res = await axios({
      url: `${urlServer}/posts/create/${username}`,
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
    return {
      status: res.status,
      postDoc: {
        username,
        content: res.data.content,
      },
    };
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
