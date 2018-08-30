import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import answers from './answers';
import level from './level';
import solved from './solved';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  answers,
  level,
  solved
});

export default rootReducer;