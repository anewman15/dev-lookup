import PropTypes from 'prop-types';
import common from '../../styles/commonStyles.module.css';

const NoRepos = ({ username }) => (
  <div className={`${common.container} ${common.flexCenter}`}>
    <p className={`${common.boxBlack}`}>
      No repositories available for&nbsp;
      <strong>
        {username}
      </strong>
    </p>
  </div>
);

NoRepos.propTypes = {
  username: PropTypes.string,
}.isRequired;

export default NoRepos;
