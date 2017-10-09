import React from 'react';
import moment from 'moment';
import Link, { LinkedComponent } from 'valueLink';
import { Input } from 'valueLink/tags';

/**
 * React Validation Fields by valueLink
 * https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112
 * https://medium.com/@gaperton/react-forms-with-value-links-part-2-validation-9d1ba78f8e49
 
 * React Semantic UI
 * https://react.semantic-ui.com/elements/input
 */

export class SampleForm extends LinkedComponent{
    state = {
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        email: '',
        emailError: '',
        userName: '',
        userNameError: '',
        password: '',
        passwordError: '',

        isActive: false,            
        today: Date.now()
    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError: '',
            lastNameError: '',
            usernameError: '',
            emailError: '',
            passwordError: ''
        };

        if (this.state.username.length < 5) {
            isError = true;
            errors.usernameError = "Username needs to be atleast 5 characters long";
        }      
        if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = "Requires valid email";
        }      
        this.setState({
            ...this.state,
            ...errors
        });      
        return isError;
    }

    onSubmit = e => {
        e.preventDefault();
        const err = this.validate();

        if (!err) {
            this.setState({
                firstName: '',
                firstNameError: '',
                lastName: '',
                lastNameError: '',
                email: '',
                emailError: '',
                userName: '',
                userNameError: '',
                password: '',
                passwordError: '',
    
                isActive: false,
            });
    
            this.props.onChange({
                firstName: '',
                lastName: '',
                email: '',
                userName: '',
                password: '',
                isActive: false
            });
        }        
    }

    render(){
        const linked = this.linkAll(); // wrap all state members in links        
        return (
            <form id='SampleForm' onSubmit={ this.onSubmit }>
                <h2>Sign In (Form)</h2>
                <div className='form-group'>
                    <label htmlFor='email'>
                        Email:<Input type='text' name='email' className='form-control' valueLink={linked.email} />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='firstName'>
                        First Name:<Input type='text' name='firstName' className='form-control' valueLink={linked.firstName} />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>
                        Last Name:<Input type='text' name='lastName' className='form-control' valueLink={linked.lastName} />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='userName'>
                        UserName:<Input type='text' name='userName' className='form-control' valueLink={linked.userName} />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>
                        Password:<Input type='password' name='password' className='form-control' valueLink={linked.password} />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='isActive'>
                        Is Active:<Input type='checkbox' name='isActive' className='form-control' checkedLink={linked.isActive} />
                    </label>
                </div>
                <button type='submit' className='btn btn-primary'>Sign In</button>                                
            </form>
        );
    }
}
