import { createStore } from 'redux';
import user from './reducers/user';

const initialState = {
  username: 'anewman15',
  userRepos: [{ id: 1 }],
  currentRepo: {},
  filters: {
    skill: '',
  },
};

export default createStore(user, initialState);
