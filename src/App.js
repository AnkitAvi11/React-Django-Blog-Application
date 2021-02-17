import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navigation loggedin={this.props.loggedin} user={this.props.user} />
        <Switch>
          {/* Authentication routes */}
          <Route path="/" exact={true} component={()=><p>Home page</p>} />
          <Route path="/auth" exact={true} component={Login} />

          {/* Private routes that require users to be authenticated */}
          <PrivateRoute path="/dashboard" loggedin={false} component={Signup} />
        </Switch>
      </BrowserRouter>
    )
  }
}

//  to maintain the authentication state of the application
const mapStateToProps = () => {
  return {
    loggedin : localStorage.getItem('token') != null ? true : false,
    user : JSON.parse(localStorage.getItem('user'))
  }
}

export default connect(mapStateToProps,{})(App);