import React from 'react';
import moment from 'moment';
import dataService from './../services/dataService';

/**
 * For understand react's component life cycle
 * https://facebook.github.io/react/docs/react-component.html
 */
export class SampleHome extends React.Component{
    constructor(props) {
        super(props);  
        this.state = {
            date: Date.now(),
            profile: {}
        };
        console.log('- constructor()');
    }         

    componentWillMount() {
        console.log('- componentWillMount()');
        var component = this;
        return dataService.get('http://localhost:3000/api/myprofile')
        .then(function(data){            
            component.setState({
                profile: data
            });
        });
    }

    render(){
        console.log('- render()');
        console.log('- this.state.date:', moment(this.state.date).format('DD-MMM-YYYY'));
        console.log('- this.state.profile:', this.state.profile);
        return (
            <div>
                <p>In a new Component!</p>
                <p>your name: {this.props.name}, your age: {this.props.age}</p>
                <p>user object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby) => <li key={hobby.id}>{hobby.name}</li>)}
                    </ul>
                </div>
                <div>
                    <h4>My Profile</h4>
                    <p>First Name: {this.state.profile.firstName}</p>
                    <p>Last Name: {this.state.profile.lastName}</p>
                    <p>Number: {this.state.profile.number}</p>
                    <p>Full Name: {this.state.profile.fullName}</p>
                    <p>Club: {this.state.profile.club}</p>
                    <p>Current Date: {moment(this.state.date).format('DD-MMM-YYYY')}</p>
                </div>
            </div>            
        );
    }

    componentDidMount(){
        console.log('- componentDidMount()');
    }

    componentWillReceiveProps(){
        console.log('- componentWillReceiveProps()');
    }
    
    /**
     * shouldComponentUpdate(): 
     * let React know if a component's output is not affected by the current change in state or props
     * default behavior is to re-render on every state change
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    shouldComponentUpdate(nextProps, nextState){
        console.log('- shouldComponentUpdate()');
        return true; //false
    }

    /**
     * componentWillUpdate() will not be invoked if shouldComponentUpdate() returns false.
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    componentWillUpdate(nextProps, nextState){     
        console.log('- componentWillUpdate()');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('- componentDidUpdate()');
    }

    componentWillUnMount(){
        console.log('- componentWillUnMount()');
    }
}