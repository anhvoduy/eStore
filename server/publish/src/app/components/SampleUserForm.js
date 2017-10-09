import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

class SampleUserForm extends React.Component {
    constructor(props) {
        super(props);        
    }

    handleSubmit(user) {

    }

    render(){
        return (
            <Form model="user" onSubmit={(user) => this.handleSubmit(user)}>
                <label htmlFor="user.firstName">First name:</label>
                <Control.text model="user.firstName" id="user.firstName" />
    
                <label htmlFor="user.lastName">Last name:</label>
                <Control.text model="user.lastName" id="user.lastName" />
    
                <button type="submit">Finish registration!</button>
            </Form>
        );
    }
}

export default SampleUserForm;