import React, { Component } from 'react';
import ReactMarkdownWithHtml  from "react-markdown";
import gfm from 'remark-gfm';

class CreateBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description : '',
            content : ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h4>Create blog</h4>
                        <form action="" method="post">
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
                                <label htmlFor="content">Type your content here</label>
                                <textarea name="content" id="content" cols="30" rows="10" className="form-control" onChange={this.handleInputChange} value={this.state.content}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="DISCARD" className="btn btn-outline-secondary"/>
                                &nbsp;
                                <input type="submit" value="SUBMIT" className="btn btn-info" />
                            </div>
                        </form>
                    </div>

                    {/**Preview section of the blog */}
                    <div className="col-sm-6">
                        <h3>Preview</h3>
                        <div className="card">
                            <div className="card-body">
                            <ReactMarkdownWithHtml 
                                children={this.state.content}
                                plugins={[gfm]}
                                allowDangerousHtml
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBlog;