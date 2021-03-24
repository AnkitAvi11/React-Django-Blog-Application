import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import CreateComment from './CreateComment';


class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments : [],
            loading : true
        }
    }

    loadComments = () => {
        fetch(`http://127.0.0.1:8000/api/blog/comment/${this.props.blog_id}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                comments : data,
                loading : false
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount () {
        this.loadComments();
    }

    render () {
        
        if (this.state.loading) {
            return <Loader />
        }

        if (this.state.comments.length <= 0 ){  
            return <div>
                <CreateComment />
                <p style={{textAlign:"center"}}><small>Be first one to comment.</small></p>
            </div>
        }

        const comments = this.state.comments.map(comment => {
            return <div className="card" key={comment.id} style={{marginBottom:"10px"}}>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div style={{width:"35px", height:"35px", background:`url(http://localhost:8000${comment.user.userprofile.profile_pic})`, borderRadius:"50%", backgroundSize:"cover", backgroundPosition:"center"}}></div>
                        <p><small><b>{new Date(comment.comment_time).toLocaleString()}</b></small></p>
                    </div>
                    <p><small><b> <Link to={`/user/${comment.user.username}`}>{comment.user.username}</Link> </b></small></p>
                    <p style={{marginTop:"10px"}}> <small>{comment.comment}</small> </p>
                </div>
            </div>
        })


        return (
            <div>
                <CreateComment />
                {comments}
            </div>
        )
    }
}

export default Comments
