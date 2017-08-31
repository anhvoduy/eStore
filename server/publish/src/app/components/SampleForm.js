import React from 'react';
import moment from 'moment';

/**
 * https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112
 */
export class SampleForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            fullName: '',
            
            email: '',
            userName: '',
            password: '',
            isActive: true,

            today: Date.now()
        };
    }

    onSubmit = e => {

    }

    render(){
        return (
            <form id='SampleForm' onSubmit={ this.onSubmit }>
                <h2>Sign In</h2>
                <div className='form-group'>
                    <label htmlFor='email'>Email address</label>
                    <input type='email'
                        className='form-control'
                        name='email'
                        value = {this.state.email}
                        onChange={ e => this.setState({ email: e.target.value })} />
                </div>

                <div className='form-group'>
                    <label htmlFor='userName'>UserName</label>
                    <input type='text'
                        className='form-control'
                        name='userName'
                        value = { this.state.userName }
                        onChange={ e => this.setState({ userName: e.target.value })} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                        className='form-control'
                        name='password'
                        value = { this.state.password } 
                        onChange={ e => this.setState({ password: e.target.value })} />
                </div>
                <div className='form-group'>
                    <label htmlFor='isActive'>Is Active</label>
                    <input type='checkbox' 
                        className='form-control' 
                        name='isActive'
                        value = { this.state.isActive }
                        onChange={ e => this.setState({ isActive: e.target.checked })} />
                </div>
                <button type='submit' className='btn btn-primary'>Sign In</button>
            </form>
        );
    }    
}
