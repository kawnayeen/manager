/**
 * Created by kawnayeen on 4/18/17.
 */
import { EMAIL_CHANGED } from '../actions/type';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            break;
        default:
            return state;
    }
};
