const fetchData = async (uri, username, setData) => {
  const response = await fetch(uri, {
    org: `${username}`,
  });
  const data = await response.json();
  setData(data);
};

export default fetchData;
