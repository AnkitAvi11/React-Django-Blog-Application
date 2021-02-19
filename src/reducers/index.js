import {combineReducers} from 'redux';

import { loginReducer, signupReducer } from "./auth";

export default combineReducers({
    auth : loginReducer,
    signup : signupReducer
})