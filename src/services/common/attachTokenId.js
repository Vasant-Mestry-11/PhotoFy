export const getURL = (url) => {
  const KEY = process.env.REACT_APP_ACCESS_KEY;
  console.log( `${url}&client_id=${KEY}`)
  return `${url}&client_id=${KEY}`;
  // return `https://api.unsplash.com/search/photos?page=1&query=car&client_id=5Byd_mmliknh0KMwSV8kzZA95AeXV4PlUo7yuR-RUvk`;
};
