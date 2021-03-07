import { GET_USER_REPOS } from './actionTypes';

export const getUserRepos = username => (
  {
    type: GET_USER_REPOS,
    payload: {
      username,
    },
  }
);

export default { getUserRepos };
