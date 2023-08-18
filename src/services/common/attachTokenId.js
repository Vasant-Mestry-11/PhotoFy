export const getURL = (url) => {
  const KEY = process.env.REACT_APP_ACCESS_KEY;
  return `${url}&client_id=${KEY}`;
};
