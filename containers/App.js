import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withC from '../hoc/withC';
import _Aux from '../hoc/_Aux';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
       this.state = {
            person: [
                { id: 'aaa', name: 'Bob', age: 28 },
                { id: 'bbb', name: 'Juan', age: 21 },
                { id: 'ccc', name: 'Vic', age: 20 }
            ],
           otherState: 'some other value',
           showPersons: false,
           toggleClicked: 0,
           authenticated: false
        };

    }
 
    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }
   // shouldComponentUpdate(nextProps, nextState) {
    //    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    //    return true;
    //}

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);

    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside compnentDidUpdate');
    }

    switchNameHandler = (newName) => {
        this.setState({
            person: [
                { name: newName, age: 28 },
                { name: 'Juan', age: 21 },
                { name: 'Nick', age: 23 }
            ]
        })
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.person.findIndex(p => { return p.id === id; });

        const persons = {
            ...this.state.person[personIndex]
        };

        persons.name = event.target.value;

        const person = [...this.state.person];
        person[personIndex] = person;

        this.setState({ person: person });
    }

    deletePersonHandler = (personIndex) => {
        //const person = this.state.person.slice();
        const person = [...this.state.person];
        person.splice(personIndex, 1);
        this.setState({ person: person });
    } 

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    }

    loginHandler = () => {
        this.setState({ authenticated: true });
    }
    render() {
        console.log('[App.js] Inside render()');
        let persons = null;

        if (this.state.showPersons) {
            persons =  <Persons
                    persons={this.state.person}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler} />;
        }

        return (
            <_Aux>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.person}
                    login={this.loginHandler}
                    clicked={this.togglePersonHandler} />
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </_Aux>
    ); 
  }
}

export default withC(App, classes.App);
