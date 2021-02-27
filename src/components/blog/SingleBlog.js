import React, {Component} from 'react';
import { blogReducer } from '../../reducers/blog';
import Loader from '../Loader';

import ReactMarkdownWithHtml  from "react-markdown";
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism'
import BlogUser from './BlogUser';

const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={materialLight} language={language?language:'js'} children={value} />
    }
}

class SingleBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog : null,
            user : null,
            error : false
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:8000/api/blog/${this.props.match.params.blog_slug}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(!data.error) {
                setTimeout(()=>{
                    this.setState({
                        blog : data
                    })
                }, 500)
            }else{
                this.setState({
                    error : true
                })
            }
        }).catch(err => {
            console.log(err)
            this.setState({
                error : true
            })
        })
    }

    render () {

        if (this.state.blog === null && this.state.error === false) {
            return <Loader />
        }

        if (this.state.error) {
            return <h1 className="container">Blog was not found</h1>
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="card">
                            <div style={{background : `url(http://localhost:8000${this.state.blog.cover_image})` , width:"100%", height:"350px", backgroundSize:"cover", backgroundPosition:"center", marginBottom:"20px", boxShadow:"1px 1px 10px grey"}}>
                                </div>
                            <div className="card-body" style={{overflow:"hidden"}}>
                                
                                <div style={{textAlign:"center", marginBottom:"50px"}}>
                                    <h1>{this.state.blog.title}</h1>
                                    <p>Published on : <b>{new Date(this.state.blog.published_on).toDateString()}</b></p>
                                    <p>{this.state.blog.description}</p>
                                </div>
                                <div>
                                    <ReactMarkdownWithHtml plugins={[gfm]}
                                    renderers={renderers} allowDangerousHtml={true} >
                                        {this.state.blog.body}
                                    </ReactMarkdownWithHtml>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div style={{position:"sticky", top:"20px"}}>
                        <BlogUser 
                        user_id = {this.state.blog.user}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleBlog;