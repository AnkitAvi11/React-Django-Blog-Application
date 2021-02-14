import React, { Component } from 'react';

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
                                <h3 style={{textAlign:"center", fontWeight:"bolder"}}>Login User</h3>
                            </div>

                            <div className="col-sm-6">
                                <h4 style={{textAlign:"center", fontWeight:"bolder"}}>Signup User</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;