import { SAVE_USER_REPOS } from './actionTypes';

const saveUserRepos = userRepos => (
  {
    type: SAVE_USER_REPOS,
    payload: {
      userRepos,
    },
  }
);

export default saveUserRepos;
