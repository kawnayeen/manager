/**
 * Created by kawnayeen on 4/20/17.
 */
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/type';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // es6 key interpolation -- need to study
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
