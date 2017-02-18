import React, { Component } from 'react';

import AddTask from './components/AddTask';
import VisibleTaskList from './containers/VisibleTaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__headline">Tasks</div>
        <div className="App__content">
          <AddTask />
          <VisibleTaskList />
        </div>
      </div>
    );
  }
}

export default App;
