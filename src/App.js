import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: "askdjaskjd", name: "Tiago", age: "31" },
      { id: "auhahah", name: "Tainara", age: "24" },
      { id: "lalallala", name: "José", age: "0" }
    ],
    another: "state"
  };

  handleTogglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  nameChangedHandler = (event, id) => {
    // We could have passed the index directly, this is just 
    // to show how it could've been done in case we were working 
    // with ids.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    let person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    // We're creating a copy of the array, so not to use its reference
    // to the state directly, which is a bad practice.
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePerson = (id) => {
    const persons = [...this.state.persons];
    persons.splice(id, 1);
    this.setState({
      persons: persons  
    })
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      border: "solid 2px black",
      padding: "20px",
      font: "inherit",
      ":hover": {
        backgroundColor: "blue"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePerson(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          )}
        </div>
      );
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'salmon'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Very cool course</h1>
        <p className={classes.join(' ')}>This actually works!!!</p>
        <button style={style} onClick={this.handleTogglePersons}>
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default Radium(App);
