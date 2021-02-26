import React, { Component } from 'react';
import { withAlert } from 'react-alert';

import ReactMarkdownWithHtml  from "react-markdown";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import gfm from 'remark-gfm';
import { publishBlogAction } from "../../actions/blog_actions";

class CreateBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description : '',
            body : '',
            cover_image : null
        }
    }


    //  function to handle the input change event
    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //  handles the file change event
    onFileSelect = (e) => {
        this.setState({
            cover_image : e.target.files[0] ? e.target.files[0] : null
        })
    }

    //  function to handle the submit action
    submitForm = (e) => {
        e.preventDefault();
        if (this.state.body === '' || this.state.title === '') {
            return this.props.alert.show('Fill up the form correctly', {type:'error'})
        }
        this.props.publishBlogAction(this.state);
    }

    //  component did update
    componentDidMount = () => {
        if(this.props.blog.error!==null) {
            this.props.alert.show('Some errors occured', {type:'error'})
            this.props.blog.error = null;   
        }
        if(this.props.blog.stat){
            this.props.blog.stat = false;
        }
    }

    //  renders the form of the creating blog along with the preview
    render () {
        if(this.props.blog.stat){
            this.props.alert.show('Blog publisehd', {type:'success'})
            return <Redirect to="/" />            
        }
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-sm-6">
                    <h4>Create blog</h4>
                        <form action="" method="post" onSubmit={this.submitForm} encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="title">Title for the blog</  label>
                                <input type="text" name="title" id="title" className="form-control" placeholder="Enter a title for the blog" value={this.state.title} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" name="description" id="description" className="form-control"
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cover">Choose a cover pic</label>
                                <input type="file" name="cover_image" id="cover" className="form-control btn" onChange={this.onFileSelect} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Type your content here</label>
                                <textarea name="body" id="content" cols="30" rows="10" className="form-control" onChange={this.handleInputChange} value={this.state.content}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value={this.props.blog.loading ? 'Publishing ... ' : 'Publish blog'} className="btn btn-info" />
                            </div>
                        </form>
                    </div>

                    {/**Preview section of the blog */}
                    <div className="col-sm-6">
                        <h4>Preview</h4>
                        <hr/>
                        <ReactMarkdownWithHtml 
                        children={this.state.body}
                        plugins={[gfm]}
                        allowDangerousHtml={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.blog_stat)
    return {
        blog : state.blog_stat
    }
}

export default withAlert()(connect(mapStateToProps, {
    publishBlogAction
}) (CreateBlog));