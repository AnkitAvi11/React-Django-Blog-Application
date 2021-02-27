import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import CreateBlog from './CreateBlog';
import SingleBlog from './SingleBlog';

class BlogRoute extends Component {
    render () {
        return (
            <Switch>
                <Route path={`${this.props.match.path}`} exact component={()=><p>Blog</p> } />

                <PrivateRoute
                path={`${this.props.match.path}/create`}
                component={CreateBlog}
                loggedin={this.props.loggedin}
                exact
                />

                <Route path={`${this.props.match.path}/:blog_slug`} component={SingleBlog} />

            </Switch>
        )
    }
}

export default withRouter(BlogRoute);