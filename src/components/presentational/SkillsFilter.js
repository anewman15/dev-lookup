import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import changeFilter from '../../redux/actions/filters';
import common from '../../styles/commonStyles.module.css';

const SkillsFilter = ({ filters, changeFilter }) => {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeFilter(filter);
    setFilter('');
  };

  return (
    <div className={`${common.container}`}>
      <div className={`${common.flexStart}`}>
        <h3>Filter by skills: </h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Ruby" value={filter} onChange={handleChange} />
          <button type="submit">Filter</button>
        </form>
      </div>
      { filters.skill ? <p>{`Showing repos for ${filters.skill}`}</p> : null }
    </div>
  );
};

SkillsFilter.propTypes = {
  changeFilter: PropTypes.function,
}.isRequired;

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps, { changeFilter })(SkillsFilter);
