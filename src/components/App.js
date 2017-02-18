import React, { Component } from 'react';

import AddTask from './AddTask';
import VisibleTaskList from '../containers/VisibleTaskList';
import Summary from './Summary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__headline">Tasks</div>
        <div className="App__content">
          <AddTask />
          <VisibleTaskList />
          <Summary />
        </div>
      </div>
    );
  }
}

export default App;
