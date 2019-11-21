import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Tiago", age: "31"},
      { name: "Tainara", age: "24"},
    ]
  });

  const [ otherState, setOtherState ] = useState({otherstate: 'other state'})

  console.log(personsState, otherState);

  const switchNameHandler = () =>{
    setPersonsState({
      persons: [
        { name: "Tiago", age: "31"},
        { name: "Tainara", age: "22"},
        { name: "José", age: "0"},
      ]
    });
  }

  return (
    <div className="App">
      <h1>Very cool course</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      {personsState.persons.map(person => 
        <Person key={person.name} name={person.name} age={person.age} />
      )}
    </div>
  );
}

export default app;

