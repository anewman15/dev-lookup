import { SAVE_USERNAME, SAVE_USER_REPOS } from './actionTypes';

const saveUserRepos = userRepos => (
  {
    type: SAVE_USER_REPOS,
    payload: {
      userRepos,
    },
  }
);

const saveUsername = username => (
  {
    type: SAVE_USERNAME,
    payload: {
      username,
    },
  }
);

export { saveUserRepos, saveUsername };
