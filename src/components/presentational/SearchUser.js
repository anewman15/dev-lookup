import { useState } from 'react';

const SearchUser = () => {
  const [username, setUsername] = useState('anewman15');

  const handleChange = e => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1>Look up a developer on GitHub</h1>
      <form>
        <input type="text" placeholder="anewman15" value={username} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchUser;
