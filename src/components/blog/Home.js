import React, { Component } from 'react';
import Loader from '../Loader';

import ReactMarkdownWithHtml  from "react-markdown";
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Link } from 'react-router-dom';

const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={materialLight} language={language?language:'js'} children={value} />
    }
}

class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {
            blogs : [],
            loading : true
        }
    }
    
    componentDidMount = () => {
        fetch('http://127.0.0.1:8000/api/blog/all/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTimeout(() => {
                this.setState({blogs : data, loading:false})
            }, 500);
        })
        .catch(err => console.log(err))
    }

    render () {

        let blogs = null;
        if (this.state.blogs.length>0){
            blogs = this.state.blogs.map(blog => {
                return (
                    <div className="col-sm-4" style={{marginBottom:"10px", minHeight:"200px"}} key={blog.id} >
                        <div className="card" style={{border:"none"}}>
                        {blog.cover_image ? <div style={{height:"200px", width:"100%", background:`url(http://127.0.0.1:8000${blog.cover_image}/)`, backgroundPosition:"center", backgroundSize : "cover"}}>

                        </div> : null}
                            <div className="card-body">
                               

                                <h3 style={{marginTop:"10px"}}> <Link to={`/blog/${blog.slug}`}>{blog.title}</Link> </h3>

                                <p>{blog.description}</p>
                                <p><b>{new Date(blog.published_on).toDateString()}</b></p>
                                
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div className="container">
                <h5>Featured blogs</h5>
                {
                    /** When no blogs found */
                    !this.state.loading && this.state.blogs.length <= 0 ? <p style={{textAlign:"center"}}>No blogs found</p> : null
                }
                {
                    this.state.loading ? <Loader /> : <div className="row">
                        {blogs}
                        </div>
                }
            </div>
        )
    }
}

export default Home;