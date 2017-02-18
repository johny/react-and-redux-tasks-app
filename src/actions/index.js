import uuid from 'uuid'


/**
 * Action types
 */

const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const SET_FILTER = 'SET_FILTER';

/**
 * Action creators
 */

export function addTask(text) {
  return {
    type: ADD_TASK,
    id: uuid.v4(),
    text
  };
};

export function toggleTask(id) { 
  return {
    type: TOGGLE_TASK,
    id
  }
};

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  }
}