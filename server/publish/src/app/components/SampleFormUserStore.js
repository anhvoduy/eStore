import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';
import SampleFormUser from './SampleFormUser';

const initialUser = { name: '' };
const store = createStore(combineForms({
    user: initialUser,
}));

export default class SampleFormUserStore extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SampleFormUser />
            </Provider>
        )
    }
}