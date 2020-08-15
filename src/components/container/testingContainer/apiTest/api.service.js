import axios from 'axios';

export function makeRequest() {
  axios.get('http://localhost:3001/feedback').then((res) => {
    return res.data.answer;
  });
}

export function getUser() {
  return axios
    .get(`http://localhost:3001/feedback`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
