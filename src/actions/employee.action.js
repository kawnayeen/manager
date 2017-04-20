/**
 * Created by kawnayeen on 4/20/17.
 */
import { EMPLOYEE_UPDATE } from './type';

export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
});
