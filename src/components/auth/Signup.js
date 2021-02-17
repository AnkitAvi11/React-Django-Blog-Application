import React, {Component} from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

class Signup extends Component {
    
    //  constructor of the class
    constructor(props) {
        super(props);
        this.state = {
            fname : '',
            username : '',
            email : '',
            password : ''
        }
    }

    //  function that kicks in when the form is submitted
    formSubmit = (e) => {
        e.preventDefault();
        if(this.state.fname==='' || this.state.username==='' || this.state.password === '' || this.state.email === '') {
            this.props.alert.show('Please fill up the form properly.', {type:'error'})
            return;
        }
        if(this.state.username.length < 5){
            this.props.alert.show('Username must be greater than 4 characters.', {type:'error'})
            return;
        }

        if(this.state.password.length < 8) {
            this.props.alert.show('Password length must be greater than 7', {type:'error'})
            return;
        }
    }

    //  updating state according to the input fields
    onFieldsChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //  function to check for redundancy of the username
    onUsernameBlur = () => {
        //  checking for redundant username

    }

    //  on mount
    componentDidMount = () => {

    }

    //  should the component update
    shouldComponentUpdate = (prevState, state) => {

    }

    //  when the component has updated according to its state
    componentDidUpdate = () => {

    }

    //  render method
    render () {
        return (
            <div className="card" style={{borderRadius:"0"}}>
                <div className="card-body">
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label htmlFor="fname">Full Name</label>
                            <input type="text" name="fname" id="fname" className="form-control" placeholder="John Doe" autoFocus onChange={this.onFieldsChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input className="form-control" type="text" placeholder="ex. JohnDoe123" id="username" name="username" onChange={this.onFieldsChange} />
                        </div>                       

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="johndoes123@xyz.com" onChange={this.onFieldsChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Enter a strong password" onChange={this.onFieldsChange} />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Register" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withAlert()(connect(null, {})(Signup));