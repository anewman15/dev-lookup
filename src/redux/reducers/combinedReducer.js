import { combineReducers } from 'redux';
import filters from './filters';
import userRepos from './userRepos';
import username from './username';

export default combineReducers({ username, userRepos, filters });
