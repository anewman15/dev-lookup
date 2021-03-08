/*
  eslint-disable prefer-template
*/

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUserRepos } from '../../redux/actions/user';
import fetchData from '../../sandbox/fetchData';
import Loading from '../presentational/Loading';
import UserNotFound from '../presentational/UserNotFound';
import SomethingWentWrong from '../presentational/SomethingWentWrong';
import SearchUser from '../presentational/SearchUser';
import NoRepos from '../presentational/NoRepos';
import UserRepos from './UserRepos';

const UserInfo = ({ userRepos, saveUserRepos }) => {
  const [username, setUsername] = useState('anewman15');
  const [userData, setUserData] = useState(userRepos);
  const [isLoading, setIsLoading] = useState(false);
  const [noReposAvailable, setNoReposAvailable] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const uri = `https://api.github.com/users/${username}/repos?per_page=100`;

  const args = {
    uri,
    username,
    saveUserRepos,
    setUserData,
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
    fetchData(args);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetchData(args);
  };

  console.log(userRepos);
  console.log(userData[0].id);
  console.log('Loading ' + isLoading);
  console.log('no repos ' + noReposAvailable);
  console.log('not found ' + notFound);
  console.log('error ' + error);

  return (
    <div>
      {userRepos.length ? userRepos[0].owner.login : null}
      <SearchUser handleChange={handleChange} handleSubmit={handleSubmit} username={username} />
      {isLoading ? <Loading /> : null}
      {userRepos ? <UserRepos username={username} /> : null}
      {userRepos.length === 0 ? <NoRepos username={username} /> : null}
      {notFound ? <UserNotFound /> : null}
      {error ? <SomethingWentWrong /> : null}
    </div>
  );
};

UserInfo.propTypes = {
  userRepos: PropTypes.array,
}.isRequired;

const mapStateToProps = state => ({
  userRepos: [...state.userRepos],
});

export default connect(mapStateToProps, { saveUserRepos })(UserInfo);
