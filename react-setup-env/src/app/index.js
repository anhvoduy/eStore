import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

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

ReactDOM.render(<App/>, document.getElementById('app'));
