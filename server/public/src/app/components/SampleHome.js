import React from 'react';
import moment from 'moment';
import dataService from './../services/dataService';

/**
 * For understand react's component life cycle
 * https://facebook.github.io/react/docs/react-component.html
 * props: values are passed to component from outside component & only be changed from outside component
 * state: keep values & change inside react's components
 */
export class SampleHome extends React.Component{
    constructor(props) {
        super(props);  
        this.state = {
            date: Date.now(),            
            profile: {},
            name: this.props.name,
            age: this.props.age,
            homeLink: props.initialHomeLinkName,
            aboutLink: 'About Changed'
        };

        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 5000);
        console.log('- SampleHome: constructor()');
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 5
        });
    }

    changeHomeLink(){
        this.props.changeHomeLink(this.state.homeLink);
    }

    changeAboutLink(){
        this.props.changeAboutLink(this.state.aboutLink);
    }

    onChangeHomeLinkHandle(event){
        this.setState({
            homeLink: event.target.value
        })
    }
    
    componentWillMount() {
        console.log('- SampleHome: componentWillMount()');
        var component = this;
        return dataService.getProfile('/api/myprofile')
        .then(function(data){
            component.setState({
                profile: data
            });
        });
    }

    render(){
        console.log('- SampleHome: render()');
        // console.log('- this.state.date:', moment(this.state.date).format('DD-MMM-YYYY'));
        // console.log('- this.state.profile:', this.state.profile);
        return (
            <div>
                <p>In a new Component!</p>
                <p>your name (prop): {this.props.name}, your age: {this.props.age}</p>
                <p>your name (state): {this.state.name}, your age: {this.state.age}</p>
                <p>user object => Name: {this.props.user.name}</p>
                <div>
                    <button className='btn btn-primary' onClick={this.onMakeOlder.bind(this)}>Make me older</button>
                </div>
                <p>-----</p>
                <div>
                    <button className='btn btn-primary' onClick={this.props.greet}>Greeting</button>
                </div>
                <p>-----</p>
                <div>
                    <input  type="text" 
                            value={this.state.homeLink} 
                            onChange={(event) => this.onChangeHomeLinkHandle(event)} />
                    <button className='btn btn-primary' onClick={this.changeHomeLink.bind(this)}>Change Home Link</button>
                </div>
                <p>-----</p>
                <div>
                    <button className='btn btn-primary' onClick={this.changeAboutLink.bind(this)}>Change About Link</button>
                </div>
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
                <div>
                    {this.props.children}    
                </div>
            </div>            
        );
    }

    componentDidMount(){
        console.log('- SampleHome: componentDidMount()');
    }

    componentWillReceiveProps(nextProps){
        console.log('- SampleHome: componentWillReceiveProps()', nextProps);
    }
    
    /**
     * shouldComponentUpdate(): 
     * let React know if a component's output is not affected by the current change in state or props
     * default behavior is to re-render on every state change
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    shouldComponentUpdate(nextProps, nextState){
        console.log('- SampleHome: shouldComponentUpdate()', nextProps, nextState);
        // if(nextState.status === 1) 
        //     return false;
        return true; //false
    }

    /**
     * componentWillUpdate() will not be invoked if shouldComponentUpdate() returns false.
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    componentWillUpdate(nextProps, nextState){     
        console.log('- SampleHome: componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('- SampleHome: componentDidUpdate()');
    }

    componentWillUnMount(){
        console.log('- SampleHome: componentWillUnMount()');
    }
}


/**
 * For understand react type checking
 * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
 */
SampleHome.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    greet: React.PropTypes.func,
    initialHomeLinkName: React.PropTypes.string,
    children: React.PropTypes.element.isRequired // same angularjs directive transclude
}