import { createStore } from 'redux';

import throttle from 'lodash/throttle';

import appReducer from '../reducers';
import { loadState, saveState } from '../services/localStorage';

const configureStore = () => {
  // load state
  const persistedState = loadState();
  const store = createStore(appReducer, persistedState)

  // subscribe to store changes
  store.subscribe(throttle(() => {
    saveState({
      tasks: store.getState().tasks
    });
  }, 1000));

  return store;

}

export default configureStore;