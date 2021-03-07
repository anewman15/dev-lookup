import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUserRepos } from '../../redux/actions/user';
import fetchData from '../../sandbox/fetchData';

const SearchUser = ({ userRepos, saveUserRepos }) => {
  const [username, setUsername] = useState('anewman15');
  const uri = `https://api.github.com/users/${username}/repos?per_page=100`;

  const handleChange = e => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    fetchData(uri, username, saveUserRepos);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetchData(uri, username, saveUserRepos);
  };

  return (
    <div>
      <h1>{`Look up a username on GitHub ${userRepos[0].id}`}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="anewman15" value={username} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchUser.propTypes = {
  userRepos: PropTypes.array,
}.isRequired;

const mapStateToProps = state => ({
  userRepos: [...state.userRepos],
});

export default connect(mapStateToProps, { saveUserRepos })(SearchUser);
