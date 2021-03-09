import { useState } from 'react';
import { connect } from 'react-redux';
import changeFilter from '../../redux/actions/filters';

const SkillsFilter = ({ filters, changeFilter }) => {
  const [filter, setFilter] = useState('Ruby');

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeFilter(filter);
    setFilter('');
  };

  return (
    <div>
      <h3>Filter by skills</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ruby" value={filter} onChange={handleChange} />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps, { changeFilter })(SkillsFilter);
