import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

//  login form 
class LoginForm extends Component {

    constructor (props) {
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

    formSubmitEvent = (e) => {
        e.preventDefault();
        if(this.state.username === '' || this.state.password === '') {
            this.props.alert.show('Please fill up the form properly.', {type:'error'})
            return;
        }
    }

    onFieldsChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render () {
        return (
            <div className="card" style={{borderRadius:"0"}}>
                <div className="card-body" style={{borderRadius:"0"}}>
                    <form action="" onSubmit={this.formSubmitEvent}>
                        <div className="form-group">
                            <label htmlFor="username">Username or Email address</label>
                            <input type="text" name="username" id="username" className="form-control" placeholder="Username or email address here" onChange={this.onFieldsChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" onChange={this.onFieldsChange} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-success"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default withAlert()(connect(null, {})(LoginForm));