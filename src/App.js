import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Very cool course</h1>
        <Person name="Tiago" age="31" />
        <Person name="Tainara" age="24" />
      </div>
    );
  }
}

export default App;
