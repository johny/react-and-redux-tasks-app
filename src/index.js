import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appReducer from './reducers';
import App from './components/App';

import { loadState, saveState } from './services/localStorage';

import './index.css';

// load state
const persistedState = loadState();
const store = createStore(appReducer, persistedState)

// subscribe to store changes
store.subscribe(() => {
  saveState(store.getState());
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
