import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class SampleApp extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Header />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Home />
                    </div>
                </div>
                <div className='row'>
                    <p>Sample Page</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<SampleApp/>, document.getElementById('sampleapp'));
