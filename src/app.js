/**
 * Created by kawnayeen on 4/17/17.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducer';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello !
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
