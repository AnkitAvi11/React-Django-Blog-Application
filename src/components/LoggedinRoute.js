import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const LoggedinRoute = ({ component: Component, loggedin, ...rest }) => {
    return <Route
    {...rest}
    component = {
        ({...props}) => {
            if(loggedin) {
                return <Redirect to="/" />
            }else{
                return <Component {...props} />
            }
        }
    }
    />
}


export default LoggedinRoute;