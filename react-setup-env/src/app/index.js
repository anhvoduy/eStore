import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

import { HeaderArea } from './components/HeaderArea';
import { SiteBrandingArea } from './components/SiteBrandingArea';
import { MainMenuArea } from './components/MainMenuArea';
import { SliderArea } from './components/SliderArea';
import { PromoArea } from './components/PromoArea';
import { FooterTopArea } from './components/FooterTopArea';
import { FooterBottomArea } from './components/FooterBottomArea';

import { className } from './style.css';

class App extends React.Component {
    render() {
		var user ={
            name: 'David',
            hobbies: [
                {
                    id: 1,
                    name: 'Football'
                },
                {   
                    id: 3,
                    name: 'Stock'
                }
            ]
        };
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Header />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Home name={'Max'} age={27} user={user} />
                    </div>
                </div>
                <div className='row'>
                    <p>Index Page</p>
                </div>
            </div>
        );
    }
}
//ReactDOM.render(<App/>, document.getElementById('app'));

ReactDOM.render(<HeaderArea/>, document.getElementById('HeaderArea'));
ReactDOM.render(<MainMenuArea/>, document.getElementById('MainMenuArea'));
ReactDOM.render(<SiteBrandingArea/>, document.getElementById('SiteBrandingArea'));
//ReactDOM.render(<SliderArea/>, document.getElementById('SliderArea'));
//ReactDOM.render(<PromoArea/>, document.getElementById('PromoArea'));
ReactDOM.render(<FooterTopArea/>, document.getElementById('FooterTopArea'));
ReactDOM.render(<FooterBottomArea/>, document.getElementById('FooterBottomArea'));
