/*
  eslint-disable no-unused-vars
*/

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUserRepos, saveUsername } from '../../redux/actions/user';
import changeFilter from '../../redux/actions/filters';
import { fetchUserRepos } from '../../sandbox/fetchData';
import Loading from '../presentational/Loading';
import UserNotFound from '../presentational/UserNotFound';
import SomethingWentWrong from '../presentational/SomethingWentWrong';
import SearchUser from '../presentational/SearchUser';
import NoRepos from '../presentational/NoRepos';
import UserRepos from './UserRepos';
import selectFilteredRepos from '../../redux/selectors/selectFilteredRepos';

const UserInfo = props => {
  const {
    savedUsername,
    userRepos, saveUserRepos,
    saveUsername,
    changeFilter,
  } = props;
  const [username, setUsername] = useState('anewman15');
  const [isLoading, setIsLoading] = useState(false);
  const [noReposAvailable, setNoReposAvailable] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const uri = `https://api.github.com/users/${username}/repos?per_page=100`;

  const args = {
    uri,
    username,
    saveUserRepos,
    setIsLoading,
    setNoReposAvailable,
    setNotFound,
    setError,
    userRepos,
  };

  const handleChange = e => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    fetchUserRepos(args);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setNoReposAvailable(false);
    setNotFound(false);
    setError(false);
    changeFilter('');
    fetchUserRepos(args);
    saveUsername(username);
  };

  return (
    <div>
      <SearchUser
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        username={username}
      />
      {userRepos && <UserRepos username={savedUsername} />}
      {isLoading && <Loading />}
      {noReposAvailable && <NoRepos username={savedUsername} />}
      {notFound && <UserNotFound />}
      {error && <SomethingWentWrong />}
    </div>
  );
};

UserInfo.propTypes = {
  userRepos: PropTypes.array,
}.isRequired;

const mapStateToProps = state => ({
  savedUsername: state.username,
  userRepos: selectFilteredRepos(state),
});

export default connect(mapStateToProps, { saveUserRepos, saveUsername, changeFilter })(UserInfo);
