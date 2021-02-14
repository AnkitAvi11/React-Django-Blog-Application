import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <p>Hello World!</p>
        <Switch>  
          
          {/* Authentication routes */}
          <Route path="/login" exact={true} component={Login} />
          <Route path="/signup" exact={true} component={Signup} />

          {/* Private routes that require users to be authenticated */}
          <PrivateRoute path="/dashboard" loggedin={false} component={Signup} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;