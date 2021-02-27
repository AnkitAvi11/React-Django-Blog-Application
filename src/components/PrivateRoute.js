import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component : Component, loggedin, ...rest}) => {
    return <Route 
    {...rest}
    component = {({...props})=>{
        if (loggedin) 
        return <Component {...props} />
        else {
            return <Redirect to="/auth" />
        }
    }}
    />
}

export default PrivateRoute;