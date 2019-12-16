import { combineReducers } from 'redux';

import coach from './coach';
import pokedex from './pokedex';
import login from './login';

const allReducers = combineReducers({
  coach: coach.reducer,
  pokedex: pokedex.reducer,
  login: login.reducer,
});

export default allReducers;
