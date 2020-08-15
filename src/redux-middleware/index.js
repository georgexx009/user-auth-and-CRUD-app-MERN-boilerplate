import { API } from '../actions/types';

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  next(action);
  //THE NEXT TRIGGERS THE REDUCER OF THE ORIGINAL DISPATCH ACTION

  if (action.type !== API) return;

  const { method, url, body, onSuccess, token } = action.payload;

  const fetchObj = {
    method: method || 'GET',
    headers: {
      'Content-type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(body),
  };

  const res = await fetch(url, fetchObj);
  const resJson = await res.json();
  onSuccess && dispatch(onSuccess(resJson));
  console.log(method);
  console.log(resJson);
  /*fetch(url)
    .then(res => res.json())
    .then(resJson => console.log(resJson));*/
};

export default apiMiddleware;
