import { createStore } from 'redux';
import repos from '../sandbox/repos';
import user from './reducers/user';

const userRepos = JSON.parse(repos);

const initialState = {
  username: 'anewman15',
  userRepos,
  currentRepo: {},
  filters: {
    skill: '',
  },
};

export default createStore(user, initialState);
