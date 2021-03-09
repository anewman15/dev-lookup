import PropTypes from 'prop-types';
import common from '../../styles/commonStyles.module.css';

const SearchUser = ({ username, handleChange, handleSubmit }) => (
  <div className={`${common.textCenter}`}>
    <h1>Look up a username on GitHub</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="anewman15" value={username} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  </div>
);

SearchUser.propTypes = {
  handleChange: PropTypes.function,
  handleSubmit: PropTypes.function,
  username: PropTypes.string,
}.isRequired;

export default SearchUser;
