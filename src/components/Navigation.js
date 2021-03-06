import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logoutUser } from "../actions/auth_actions";

class Navigation extends Component {

    constructor (props) {
        super(props);
    }

    logoutuser = () => {
        this.props.logoutUser()
    }

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom : "20px"}}>
        <div className="container">
        <NavLink className="navbar-brand" to="/" exact><b>Communion</b></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact={true}>Home
                <span className="sr-only">(current)</span>
                </NavLink>
            </li>
            
            </ul>
            <ul className="navbar-nav ml-auto">
            {
                this.props.loggedin ? <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" style={{fontWeight:"bolder"}}>{this.props.user.username}
                </a>
                <div className="dropdown-menu">
                <Link className="dropdown-item" to="/blog/create">Create Blog</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#" onClick={this.logoutuser}>Logout</a>
                </div>
            </li> : <div>              
                <li className="nav-item">
                    <NavLink to="/auth" className="nav-link">Login or Signup</NavLink>
                </li>
            </div>
            }
            </ul>
        </div>
        </div>
        </nav>
        )
    }

}

export default connect(null, {logoutUser})(Navigation);