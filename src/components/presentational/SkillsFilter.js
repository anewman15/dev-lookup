const SkillsFilter = () => {
  const filter = 'Skill';
  return (
    <div>
      <h3>Filter repositories by skills</h3>
      <form>
        <input type="text" placeholder={filter} />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default SkillsFilter;
