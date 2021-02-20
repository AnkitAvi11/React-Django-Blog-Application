import React, { Component } from 'react';
import Loader from '../Loader';

import ReactMarkdownWithHtml  from "react-markdown";
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism'

const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={materialLight} language={language} children={value} />
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
        setTimeout(() => {
            this.setState({
                loading : false
            })
        }, 1000);
    }

    render () {
        
        const markdown = "### How to use this platform \n Here is some JavaScript code to understand \n ~~~js \n console.log('Hello world');\n function myfunction () => {}";

        return (
            <div className="container">
                <h3>Featured blogs</h3>
                {
                    /** When no blogs found */
                    !this.state.loading && this.state.blogs.length <= 0 ? <p style={{textAlign:"center"}}>No blogs found</p> : null
                }
                {
                    this.state.loading ? <Loader /> : null
                }
                <ReactMarkdownWithHtml plugins={[gfm]} renderers={renderers}>
                    {markdown}
                </ReactMarkdownWithHtml>
            </div>
        )
    }
}

export default Home;