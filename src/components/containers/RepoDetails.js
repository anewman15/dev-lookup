import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { fetchRepoDetails } from '../../sandbox/fetchData';
import Loading from '../presentational/Loading';
import SomethingWentWrong from '../presentational/SomethingWentWrong';

const RepoDetails = ({ match }) => {
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

  return (
    <div>
      {isLoading ? <Loading /> : null}
      {error ? <SomethingWentWrong /> : null}
      <div>
        <p>{repoDetails.full_name}</p>
        <a href={repoDetails.html_url}>{repoDetails.html_url}</a>
        <p>{repoDetails.language}</p>
        <p>{repoDetails.description ? repoDetails.description : 'No description available'}</p>
        <p>
          Created: &nbsp;
          {repoDetails.created_at}
        </p>
        <p>
          Last updated: &nbsp;
          {repoDetails.updated_at}
        </p>
        <p>
          Stars: &nbsp;
          {repoDetails.stargazers_count}
        </p>
        <p>
          Watchers: &nbsp;
          {repoDetails.watchers_count}
        </p>
        <p>
          Subscribers: &nbsp;
          {repoDetails.subscribers_count}
        </p>
        <hr />
      </div>
    </div>
  );
};

RepoDetails.propTypes = {
  index: PropTypes.number,
  repo: PropTypes.object,
}.isReuired;

export default withRouter(RepoDetails);
