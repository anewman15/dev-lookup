const SkillsFilter = () => {
  const filter = 'Skill';
  return (
    <div>
      <form>
        <input type="text" placeholder={filter} />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default SkillsFilter;
