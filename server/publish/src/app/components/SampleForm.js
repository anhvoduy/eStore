import React from 'react';
import moment from 'moment';

/**
 * https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112
 * https://github.com/benawad/basic-react-form/tree/3_client_side_validation
 
 * React Semantic UI
 * https://react.semantic-ui.com/elements/input
 */
export class SampleForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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
        };
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
        return (
            <form id='SampleForm' onSubmit={ this.onSubmit }>
                <h2>Sign In</h2>
                {/* <div className='form-group'>
                    <label htmlFor='email'>Email address</label>
                    <input type='email'
                        className='form-control'
                        name='email'
                        value = {this.state.email}
                        onChange={ e => this.setState({ email: e.target.value })} />
                </div> */}

                <div className='form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text'
                        name='firstName'
                        className='form-control'                        
                        value = { this.state.firstName }
                        onChange={ e => this.setState({ firstName: e.target.value })}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text'
                        name='lastName'
                        className='form-control'                        
                        value = { this.state.lastName }
                        onChange={ e => this.setState({ lastName: e.target.value })} 
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='userName'>UserName</label>
                    <input type='text'
                        name='userName'
                        className='form-control'                        
                        value = { this.state.userName }
                        onChange={ e => this.setState({ userName: e.target.value })} 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                        name='password'
                        className='form-control'                        
                        value = { this.state.password } 
                        onChange={ e => this.setState({ password: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='isActive'>Is Active</label>
                    <input type='checkbox'
                        name='isActive'
                        className='form-control'                        
                        value = { this.state.isActive }
                        onChange={ e => this.setState({ isActive: e.target.checked })} 
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Sign In</button>
            </form>
        );
    }    
}
