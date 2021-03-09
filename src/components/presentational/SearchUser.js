import PropTypes from 'prop-types';

const SearchUser = ({ username, handleChange, handleSubmit }) => {
  const userRepos = 'Hi';
  return (
    <div>
      <h1>{`Look up a username on GitHub ${userRepos}`}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="anewman15" value={username} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchUser.propTypes = {
  handleChange: PropTypes.function,
  handleSubmit: PropTypes.function,
  username: PropTypes.string,
}.isRequired;

export default SearchUser;
