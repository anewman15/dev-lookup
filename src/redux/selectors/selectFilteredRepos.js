const selectFilteredRepos = state => {
  const { userRepos, filters } = state;
  if (filters.skill === '') {
    return userRepos;
  }
  return userRepos.filter(repo => repo.language === filters.skill);
};

export default selectFilteredRepos;
