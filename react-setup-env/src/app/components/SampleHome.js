import React from 'react';
import dataService from './../services/dataService';

/**
 * For understand react's component life cycle
 * https://facebook.github.io/react/docs/react-component.html
 */
export class SampleHome extends React.Component{
    constructor(props) {
        super(props);  
        this.state = {
            currentDate: Date.now(),
            profile: {}
        };
        console.log('- constructor()');
    }    

    componentWillMount() {
        var component = this;
        return dataService.get('http://localhost:3000/api/myprofile')
        .then(function(profile){
            console.log('- profile:', profile);
            component.setState({profile: profile});
        });
        console.log('- componentWillMount()');
    }

    componentDidMount(){
        console.log('- componentDidMount()');
    }

    componentWillReceiveProps(){
        console.log('- componentWillReceiveProps()');
    }

    shouldComponentUpdate(){
        console.log('- shouldComponentUpdate()');
    }

    componentWillUpdate(){
        console.log('- componentWillUpdate()');
    }

    componentDidUpdate(){
        console.log('- componentDidUpdate()');
    }

    componentWillUnMount(){
        console.log('- componentWillUnMount()');
    }

    render(){
        // console.log('--------');
        // console.log(this.props);
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
                    <p>First Name: {this.state.firstName}</p>
                    <p>Last Name: {this.state.lastName}</p>
                    <p>Number: {this.state.number}</p>
                    <p>Full Name: {this.state.fullName}</p>
                    <p>Club: {this.state.club}</p>
                </div>
            </div>            
        );
    }    
}