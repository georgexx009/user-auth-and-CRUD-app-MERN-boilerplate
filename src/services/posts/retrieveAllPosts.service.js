import axios from 'axios';
import { logError } from '../catch.service';
import { formatAllPosts } from '../../helpers/formatPosts';

export async function retrieveAllPosts() {
  try {
    const res = await axios.get(`${process.env.API_URL}/posts`, {
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
