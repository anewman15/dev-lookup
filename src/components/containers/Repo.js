import PropTypes from 'prop-types';

const Repo = ({ index, repo }) => (
  <div>
    <p>{index + 1}</p>
    <p>{repo.full_name}</p>
    <p><a href={repo.html_url}>{repo.html_url}</a></p>
    <p>{repo.language}</p>
    <p>{repo.description}</p>
    <p>
      Last updated: &nbsp;
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
