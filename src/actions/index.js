/**
 * Created by kawnayeen on 4/18/17.
 */
import { EMAIL_CHANGED } from './type';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
});
