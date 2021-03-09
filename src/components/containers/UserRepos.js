import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectFilteredRepos from '../../redux/selectors/selectFilteredRepos';
import SkillsFilter from '../presentational/SkillsFilter';
import Repo from './Repo';

const UserRepos = ({ username, userRepos }) => {
  const repos = userRepos.map((repo, index) => <Repo key={repo.id} repo={repo} index={index} />);

  return (
    <div>
      <h2>
        {username}
        &apos; Repositories
      </h2>
      <SkillsFilter />
      {repos}
    </div>
  );
};

UserRepos.propTypes = {
  username: PropTypes.string,
  userRepos: PropTypes.array,
}.isRequired;

const mapStateToProps = state => ({
  userRepos: selectFilteredRepos(state),
});

export default connect(mapStateToProps)(UserRepos);
