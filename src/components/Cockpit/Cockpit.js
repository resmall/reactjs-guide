import React from 'react';
import styled from 'styled-components';
import './Cockpit.css'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  border: solid 2px black;
  padding: 20px;
  font: inherit;
  :hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen' };
    color: black;
  }
`

const Cockpit = (props) => {
    const classes = [];

    if (props.persons.length <= 2) {
      classes.push('red');
    }

    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This actually works!!!</p>
             <StyledButton alt={props.showPersons} onClick={props.click}>
                Toggle Persons
            </StyledButton>
        </div>
    );
}

export default Cockpit;
