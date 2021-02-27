import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

class BlogUser extends Component {

    constructor (props) {
        super(props);
        this.state = {
            user : null
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:8000/api/auth/get_user/${this.props.user_id}/`)
        .then(res => res.json())
        .then(data => {
            setTimeout(() => {
                this.setState({
                    user : data
                })
            }, 500);
        }).catch(err => {
            console.log(err);
        })
    }

    render () {

        if(this.state.user === null) {
            return <Loader />
        }

        return (
            <div>
                <h5 style={{borderLeft : "5px solid black", paddingLeft:"5px"}}>About author</h5>
                <div className="card">
                    <img src={`http://localhost:8000${this.state.user.userprofile.profile_pic}`} alt="" style={{width:"100%"}} />
                    <div className="card-body">
                        <h3>{this.state.user.first_name} {this.state.user.last_name}</h3>
                        <h5><Link to={`/user/${this.state.user.username}`}>{this.state.user.username}</Link></h5>
                    </div>
                </div>
                <br/>
                <p>More articles from <b>{this.state.user.username}</b></p>
            </div>
        )
    }
}

export default BlogUser;
