import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        this.focusInput();
    }

    focusInput() {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <WithClass classes={classes.Person} >
                <AuthContext.Consumer>
                    {auth => auth ? <p> I'm authenticated!</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}> I'm {this.props.name} !!</p>
                <p onClick={this.props.click}> Age: {this.props.age} </p>
                <input type="text"
                    ref={this.inputElement}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </WithClass>
        )

    }
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default Person;
