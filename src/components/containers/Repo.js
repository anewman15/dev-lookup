import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Repo = ({ index, repo }) => (
  <div>
    <p>{index + 1}</p>
    <Link to={`repo/${repo.full_name}`}>{`https://github.com/${repo.full_name}`}</Link>
    <p>
      Stars: &nbsp;
      {repo.stargazers_count}
    </p>
    <p>{repo.language}</p>
    <p>
      Last commited: &nbsp;
      {repo.updated_at}
    </p>
    <hr />
  </div>
);

Repo.propTypes = {
  index: PropTypes.number,
  repo: PropTypes.object,
}.isReuired;

export default Repo;
