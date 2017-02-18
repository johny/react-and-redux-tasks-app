import { combineReducers } from 'redux';

import tasks from './tasks'

// create root app reducer for store
const appReducer = combineReducers({tasks});

export default appReducer;