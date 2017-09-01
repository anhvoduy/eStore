import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './SampleFormUserStore';

export default class SampleFormUser extends React.Component{    
    render() {
        return (
            <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
                <label>Your name?</label>
                <Control.text model=".name" />
                <button>Submit!</button>
            </Form>
        )
    }
}