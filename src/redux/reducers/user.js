const user = (state, action) => {
  switch (action.type) {
    case 'SAVE_USER_REPOS': {
      return {
        ...state,
        userRepos: action.payload.userRepos,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
