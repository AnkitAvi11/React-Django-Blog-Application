import React, { Component } from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3>Login User</h3>
                                <LoginForm />
                            </div>

                            <div className="col-sm-6">
                                <h4>Signup User</h4>
                                <Signup />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;