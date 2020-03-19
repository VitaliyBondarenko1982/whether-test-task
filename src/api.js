async function getData(url) {
  const response = await fetch(url);

  return response.json();
}

export const getCityData = (url) => {
  return getData(url);
};
