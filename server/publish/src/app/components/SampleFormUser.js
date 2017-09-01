import React from 'react';
import Link, { LinkedComponent } from 'valueLink';
import { Input } from 'valueLink/tags';

/**
 * React Validation Fields by valueLink
 * https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112
 * https://medium.com/@gaperton/react-forms-with-value-links-part-2-validation-9d1ba78f8e49 
 */

const SampleFormUser = React.createClass({
    getInitialState(){
        return {
            name: '',
            email: '',
            isActive: true
        }
    },

    render() {
        const nameLink = Link.state(this, 'name')
                             .check(x => x, 'Name is required')
                             .check(x => x.indexOf('') < 0, 'Name should not contain spaces');

        const emailLink = Link.state(this, 'email')
                              .check(x => x, 'Email is required')
                              .check(x => x.match(emailRegexPattern), 'Must be valid email');
                    
        return ( 
            <form onSubmit={ this.onSubmit }>
                <FormInput label='Name:' valueLink={ nameLink } type='text' />
                <FormInput label='Email:' valueLink={ emailLink } type='text' />
                <label>Is Active:
                    <Input type='checkbox' checkedLink={ Link.state(this, 'isActive') } />
                </label>
                
                <button disabled={ nameLink.error || emailLink.error } type='submit'>
                    Add User
                </button>
            </form>
        );
    },

    onSubmit() {        
    }
});