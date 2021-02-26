import {combineReducers} from 'redux';

import { loginReducer, signupReducer } from "./auth";
import { blogReducer } from "./blog";

export default combineReducers({
    auth : loginReducer,
    signup : signupReducer,
    blog_stat : blogReducer
})