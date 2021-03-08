import PropTypes from 'prop-types';

const NoRepos = ({ username }) => (
  <div>
    <p>
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
