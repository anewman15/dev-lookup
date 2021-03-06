import { useEffect, useState } from 'react';
import fetchData from '../../sandbox/fetchData';

const SearchUser = () => {
  const [username, setUsername] = useState('anewman15');
  const [userData, setUserData] = useState([]);
  const uri = `https://api.github.com/users/${username}/repos`;

  const handleChange = e => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    fetchData(uri, username, setUserData);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetchData(uri, username, setUserData);
  };

  return (
    <div>
      <h1>Look up a username on GitHub</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="anewman15" value={username} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchUser;
