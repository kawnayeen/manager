/**
 * Created by kawnayeen on 4/17/17.
 */
import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});
