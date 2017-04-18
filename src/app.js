/**
 * Created by kawnayeen on 4/17/17.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import LoginForm from './components/login.form';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDKx2JnYjenISWMDGWv0XvX272RvqGqOcs',
            authDomain: 'manager-77ccc.firebaseapp.com',
            databaseURL: 'https://manager-77ccc.firebaseio.com',
            projectId: 'manager-77ccc',
            storageBucket: 'manager-77ccc.appspot.com',
            messagingSenderId: '762709499622'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
