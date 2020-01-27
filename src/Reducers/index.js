import { combineReducers } from 'redux';

import { students } from './StudentReducer';

const rootReducer = combineReducers({
  students,
});

export default rootReducer;