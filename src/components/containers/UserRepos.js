import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repo from './Repo';

const UserRepos = ({ userRepos }) => {
  const repos = userRepos.map((repo, index) => <Repo key={repo.id} repo={repo} index={index} />);

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
