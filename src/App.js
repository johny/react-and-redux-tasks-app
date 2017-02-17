import React, { Component } from 'react';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__headline">Tasks</div>
        <div className="App__content">
          <AddTask />
          <TaskList />
        </div>
      </div>
    );
  }
}

export default App;
