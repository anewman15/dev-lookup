import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { fetchRepoDetails } from '../../sandbox/fetchData';
import Loading from '../presentational/Loading';
import SomethingWentWrong from '../presentational/SomethingWentWrong';
import RepoDetails from './RepoDetails';

const RepoInfo = ({ match }) => {
  const [repoDetails, setRepoDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const uri = `https://api.github.com/repos/${match.params.repo_owner}/${match.params.repo_name}`;

  const args = {
    setRepoDetails,
    setIsLoading,
    setError,
    uri,
  };

  useEffect(() => {
    fetchRepoDetails(args);
  }, []);

  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <SomethingWentWrong />;
  }
  if (repoDetails.id) {
    content = <RepoDetails repoDetails={repoDetails} />;
  }

  return (
    <div>
      {content}
    </div>
  );
};

RepoInfo.propTypes = {
  match: PropTypes.object,
}.isReuired;

export default withRouter(RepoInfo);
