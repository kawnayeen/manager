/**
 * Created by kawnayeen on 4/18/17.
 */
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './type';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
});

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
});
