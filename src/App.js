import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Tiago", age: "31"},
      { name: "Tainara", age: "24"},
      { name: "José", age: "0"},
    ],
    another: "state"
  };

  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        { name: newName, age: "31"},
        { name: "Tainara", age: "22"},
        { name: "José", age: "0"},
      ]
    });
  }

  nameChangedHandler = (event) =>  {
    this.setState({
      persons: [
        { name: "Tiago ", age: "31"},
        { name: event.target.value, age: "22"},
        { name: "José", age: "0"},
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Very cool course</h1>
        <button onClick={() => this.switchNameHandler("new name")}>
          Switch name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >My hobbies: fishing</Person>

        <Person
          changed={this.nameChangedHandler}
          click={() => this.switchNameHandler("another name")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >My hobbies: hunting</Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          >My hobbies: videogames</Person>
      </div>
    );
  };
}

export default App;

