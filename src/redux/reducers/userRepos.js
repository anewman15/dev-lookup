const userRepos = (state = null, action) => {
  switch (action.type) {
    case 'SAVE_USER_REPOS': {
      return [
        ...action.payload.userRepos,
      ];
    }
    default: {
      return state;
    }
  }
};

export default userRepos;
