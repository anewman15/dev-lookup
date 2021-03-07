import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserRepos = ({ userRepos }) => {
  const repos = userRepos.map(repo => <h1 key={repo.id + 1}>{repo.id}</h1>);

  return (
    <div>
      {repos}
    </div>
  );
};

UserRepos.propTypes = {
  userRepos: PropTypes.array,
}.isRequired;

const mapStateToProps = state => ({
  userRepos: [...state.userRepos],
});

export default connect(mapStateToProps)(UserRepos);
