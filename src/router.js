/**
 * Created by kawnayeen on 4/19/17.
 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login.form';

const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="login" component={LoginForm} title="Please Login"/>
    </Router>
);

export default RouterComponent;
