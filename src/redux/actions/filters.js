import { CHANGE_FILTER } from './actionTypes';

const changeFilter = filter => (
  {
    type: CHANGE_FILTER,
    payload: {
      filter,
    },
  }
);

export default changeFilter;
