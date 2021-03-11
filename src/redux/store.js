import { createStore } from 'redux';
import repos from '../sandbox/repos';
import combinedReducer from './reducers/combinedReducer';

const userReposInit = JSON.parse(repos);

const initialState = {
  username: 'anewman15',
  userRepos: userReposInit,
  filters: {
    skill: '',
  },
};

export default createStore(combinedReducer, initialState);
