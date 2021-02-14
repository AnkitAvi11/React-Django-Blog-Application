import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends Component {

    constructor (props) {
        super(props);
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
            <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/search">Search</NavLink>
            </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            {
                this.props.loggedin ? <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">UserName</a>
                <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">Create Blog</Link>
                <Link className="dropdown-item" href="#">Profile</Link>
                <Link className="dropdown-item" to="#">Settings</Link>
                <Link className="dropdown-item" to="#">About us</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Logout</a>
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

export default Navigation;