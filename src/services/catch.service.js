export const logError = err => {
  console.log(`status code: ${err.response.status}`);
  console.log(`server message: ${err.response.data}`);
  return err.response;
};
