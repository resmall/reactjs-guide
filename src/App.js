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

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Tiago ", age: "31" },
        { name: event.target.value, age: "22" },
        { name: "José", age: "0" }
      ]
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
              click={() => this.deletePerson(index)} />
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
