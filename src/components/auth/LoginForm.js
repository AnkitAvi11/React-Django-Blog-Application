import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from "../../actions/auth_actions";

//  login form 
class LoginForm extends Component {

    //  constructor of the class
    constructor (props) {
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

    //  function to handle the form submission
    formSubmitEvent = (e) => {
        e.preventDefault();
        if(this.state.username === '' || this.state.password === '') {
            this.props.alert.show('Please fill up the form properly.', {type:'error'})
            return;
        }
        this.props.loginUser(this.state.username, this.state.password)
    }

    componentDidMount = () => {
        console.log('Component was mounted')
    }

    componentDidUpdate = () => {
        if (this.props.auth.error) {
            this.props.alert.show(this.props.auth.error, {type : 'error'})
            this.props.auth.error = null;
        }else if(this.props.auth.user!==null){
            this.props.alert.show('User successfully logged in.', {type : 'success'})
        }
    }

    //  function to handle the input change
    onFieldsChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    //  render function
    render () {
        //  redirects to the home page after the user is loggedin 
        if(this.props.auth.user!=null) {
            return <Redirect to="/" />
        }
        if(this.props.auth.user!==null){
            this.props.alert.show('User successfully logged in.', {type : 'success'})
        }

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
                            <input type="submit" value={this.props.auth.loading ? 'Logging you in' : 'Login'} className="btn btn-success"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default withAlert()(connect(mapStateToProps, { 'loginUser' : loginUser })(LoginForm));