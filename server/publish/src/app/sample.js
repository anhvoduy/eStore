import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { SampleHeader } from './components/Header';
import { SampleHome } from './components/SampleHome';
import { SampleForm } from './components/SampleForm';
import { SampleCarousel } from './components/SampleCarousel';

import { SampleFormUser } from './components/SampleFormUser';
import { SampleFormUserStore } from './components/SampleFormUserStore';

class SampleApp extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: 'Home',
            aboutLink: 'About Us',
            homeMounted: true
        };
    }

    onGreet() {
        alert('hello');
    }

    onChangeHomeLinkName(name){
        this.setState({
            homeLink: name
        })
    }

    onChangeAboutLinkName(name){
        this.setState({
            aboutLink: name
        })
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        var user ={
            name: 'David',
            hobbies: [
                { id: 1, name: 'Football' }, 
                { id: 2, name: 'Movie' }, 
                { id: 3, name: 'Music' }
            ]
        };

        let homeComponent = '';
        if(this.state.homeMounted){
            homeComponent = (
                <SampleHome 
                    name={'Max'} 
                    age={27} 
                    user={user} 
                    greet={this.onGreet} 
                    changeHomeLink={this.onChangeHomeLinkName.bind(this)} 
                    changeAboutLink={this.onChangeAboutLinkName.bind(this)}
                    initialHomeLinkName={this.state.homeLink}>
                    <p>This is a paragraph! (from reactjs's children like angularjs's directive transclude = true)</p>
                </SampleHome>
            );
        }

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <SampleHeader homeLink={this.state.homeLink} aboutLink={this.state.aboutLink}>
                        </SampleHeader>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        {homeComponent}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount HomeComponent</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <p>Sample Form Validation</p>
                    </div>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <SampleForm />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <p>Sample Form User</p>
                    </div>
                    <div className='col-xs-10 col-xs-offset-1'>
                                                
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <p>Sample Carousel</p>
                    </div>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <SampleCarousel />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<SampleApp/>, document.getElementById('sampleapp'));
