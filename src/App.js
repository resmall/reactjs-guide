import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Tiago", age: "31"},
      { name: "Tainara", age: "24"},
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Tiago", age: "31"},
        { name: "Tainara", age: "22"},
        { name: "José", age: "0"},
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Very cool course</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        {this.state.persons.map(person => 
          <Person key={person.name} name={person.name} age={person.age} />
        )}
      </div>
    );
  }
}

export default App;
