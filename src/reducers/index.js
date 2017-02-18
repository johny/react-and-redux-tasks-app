import { combineReducers } from 'redux';

import tasks from './tasks';
import filter from './filter';

// create root app reducer for store
const appReducer = combineReducers({tasks, filter});

export default appReducer;