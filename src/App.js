import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
      border: "solid 1px black",
      padding: "20px",
      backgroundColor: "white"
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
    }

    return (
      <div className="App">
        <h1>Very cool course</h1>
        <button style={style} onClick={this.handleTogglePersons}>
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
