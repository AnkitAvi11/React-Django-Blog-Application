import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import CreateBlog from './components/blog/CreateBlog';
import Home from './components/blog/Home';
import LoggedinRoute from './components/LoggedinRoute';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import { authStateValidation } from "./actions/auth_actions";

class App extends Component {

  componentDidMount = () => {
    this.props.authStateValidation()
  }

  render () {
    return (
      <BrowserRouter>
        <Navigation loggedin={this.props.loggedin} user={this.props.user} />
        <Switch>
          {/* Authentication routes */}
          <Route path="/" exact={true} component={Home} />
          <LoggedinRoute path="/auth" exact={true} component={Login} loggedin={this.props.loggedin} />

          {/* Private routes that require users to be authenticated */}
          <PrivateRoute path="/dashboard" loggedin={this.props.loggedin} component={Signup} />
          <PrivateRoute path="/blog/create" loggedin={this.props.loggedin} component={CreateBlog} />
        </Switch>
      </BrowserRouter>
    )
  }
}

//  to maintain the authentication state of the application
const mapStateToProps = (state) => {
  console.log(state.auth.user)
  return {
    loggedin : state.auth.user ? true : false,
    user : state.auth.user ? state.auth.user : ''
  }
}

export default connect(mapStateToProps,{
  authStateValidation
})(App);