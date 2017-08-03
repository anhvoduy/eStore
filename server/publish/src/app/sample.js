import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { SampleHome } from './components/SampleHome';
import { SampleCarousel } from './components/SampleCarousel';

class SampleApp extends React.Component {
    render() {
        var user ={
            name: 'David',
            hobbies: [
                {
                    id: 1,
                    name: 'Football'
                }, 
                {
                    id: 2,
                    name: 'Movie'
                }, 
                {   
                    id: 3,
                    name: 'Music'
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
                        <SampleHome name={'Max'} age={27} user={user} />
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

