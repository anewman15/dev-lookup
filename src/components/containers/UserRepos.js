import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectFilteredRepos from '../../redux/selectors/selectFilteredRepos';
import SkillsFilter from '../presentational/SkillsFilter';
import Repo from './Repo';
import common from '../../styles/commonStyles.module.css';

const UserRepos = ({ username, userRepos }) => {
  const repos = userRepos.map((repo, index) => <Repo key={repo.id} repo={repo} index={index} />);

  return (
    <div className={`${common.container}`}>
      <h2 className={`${common.textCenter} `}>
        {`Search for ${username} returned ${userRepos.length} repositories`}
      </h2>
      <SkillsFilter />
      <div>
        {repos}
      </div>
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
