import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SampleUserForm from './SampleUserForm';
import SampleUserStore from './SampleUserStore';

export default class SampleUser extends React.Component{
    render() {
        return (
          <Provider SampleUserStore={ SampleUserStore }>
              <SampleUserForm />
          </Provider>
        );
    }
}
