import React from 'react';
import classes from './Cockpit.css';
import _Aux from '../../hoc/_Aux';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <_Aux>
            <h1> {props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}> My first REACT app</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
        </_Aux>
    );
};

export default cockpit;