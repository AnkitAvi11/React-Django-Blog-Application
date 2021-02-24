import React, { Component } from 'react';

import ReactMarkdownWithHtml  from "react-markdown";
import gfm from 'remark-gfm';

class CreateBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description : '',
            content : '',
            cover : null
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
            cover : e.target.files[0] ? e.target.files[0] : null
        })
    }

    //  renders the form of the creating blog along with the preview
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
                                <label htmlFor="cover">Choose a cover pic</label>
                                <input type="file" name="cover" id="cover" className="form-control btn" onChange={this.onFileSelect} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Type your content here</label>
                                <textarea name="content" id="content" cols="30" rows="10" className="form-control" onChange={this.handleInputChange} value={this.state.content}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Publish" className="btn btn-info" />
                            </div>
                        </form>
                    </div>

                    {/**Preview section of the blog */}
                    <div className="col-sm-6">
                        <h4>Preview</h4>
                        <hr/>
                        <ReactMarkdownWithHtml 
                        children={this.state.content}
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
    console.log(state)
    return {

    }
}

export default CreateBlog;