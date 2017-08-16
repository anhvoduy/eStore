import React from 'react';
import moment from 'moment';
import dataService from './../services/dataService';

/**
 * For understand react's component life cycle
 * https://facebook.github.io/react/docs/react-component.html
 * props: values are passed to component from outside component & only be changed from outside component
 * state: keep values & change inside react's components
 */
export class SampleForm extends React.Component{
    constructor(props) {
        super(props);  
        this.state = {
            date: Date.now()
        };        
        console.log('- constructor()');
    }    
    
    componentWillMount() {
        console.log('- componentWillMount()');     
    }

    render(){
        console.log('- render()');        
        return (
            <form id='FormSample'>
            </form>            
        );
    }

    componentDidMount(){
        console.log('- componentDidMount()');
    }

    componentWillReceiveProps(){
        console.log('- componentWillReceiveProps()');
    }
        
    shouldComponentUpdate(nextProps, nextState){
        console.log('- shouldComponentUpdate()');
        return true; //false
    }
    
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
