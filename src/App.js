import React, { Component } from 'react';

import AddTask from './components/AddTask';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__headline">Tasks</div>
        <div className="App__content">
          <AddTask />
        </div>
      </div>
    );
  }
}

export default App;
