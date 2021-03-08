import { useState } from 'react';

const SkillsFilter = () => {
  const [filter, setFilter] = useState('Ruby');

  const handleChange = e => {
    setFilter(e.target.value);
  };

  console.log(filter);

  return (
    <div>
      <h3>Filter by skills</h3>
      <form>
        <input type="text" placeholder="Ruby" value={filter} onChange={handleChange} />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default SkillsFilter;
