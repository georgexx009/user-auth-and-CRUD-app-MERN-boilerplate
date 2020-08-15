import axios from 'axios';
import { urlServer } from '../../constants';

export async function retrieveAllNotes() {
  try {
    const res = await axios.get(`${urlServer}/notes`, {
      headers: {
        accept: 'application/json',
      },
    });
    if (res.status !== 200) {
      throw new Error('bad request: could not retrieve all notes');
    }
    return res.data;
  } catch (err) {
    console.log(`error in retrieve all notes: ${err.message}`);
  }
}

export async function saveNewNote(newNote) {
  const { token } = JSON.parse(localStorage.getItem('user'));
  try {
    const res = await axios.post(
      `${urlServer}/notes`,
      { ...newNote },
      {
        headers: {
          'Content-type': 'application/json',
          authorization: token,
        },
      }
    );
    /*const res = await axios({
      url: `${urlServer}/notes`,
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      data: newNote,
    });*/
    console.log(res);
    if (res.status !== 200) {
      throw new Error('bad request: could not create new note');
    }
    return res.data;
  } catch (err) {
    console.log(`error in creating new note: ${err.message}`);
  }
}
