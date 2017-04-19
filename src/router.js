/**
 * Created by kawnayeen on 4/19/17.
 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login.form';
import EmployeeList from './components/employee.list';

const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
            <Scene key="employeeList" component={EmployeeList} title="Employees" />
        </Scene>
    </Router>
);

export default RouterComponent;
