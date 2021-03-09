import { GET_REPO } from './actionTypes';

export const getRepo = url => (
  {
    type: GET_REPO,
    payload: {
      url,
    },
  }
);

export default { getRepo };
