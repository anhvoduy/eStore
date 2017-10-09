import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { combineForms, createForms } from 'react-redux-form';

const initialUserState = {
    firstName: '',
    lastName: ''
};

// If you want your entire store to have the form state...
const store = createStore(combineForms({
    user: initialUserState,
}));

// Or you have an existing store and want the form state to
// exist alongside the existing state...
// const store = createStore(combineReducers({
//     existing: existingReducer,
//     foo: fooReducer,
//     bar: barReducer,
  
//     // ... use createForms, which will create:
//     // the model reducer at "user"
//     // the forms reducer at "forms" (e.g., "forms.user")
//     ...createForms({
//         user: initialUserState,
//     }),
// }));

// Or you want to nest your form and model reducer under a specific key...
// const store = createStore(combineReducers({
//     existing: existingReducer,
//     foo: fooReducer,
//     bar: barReducer,
  
//     // Make sure to specify the key as the second argument, so that RRF
//     // knows where the form and model reducers exist in the store!
//     SampleUserForm: combineForms({
//         user: initialUserState,
//     }, 'SampleUserForm'),
// }));

export default store;