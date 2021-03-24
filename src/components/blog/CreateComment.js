import React, {Component} from 'react';

class CreateComment extends Component {
    render () {
        return (
            <div>
                <form action="">
                    <div className="form-group">
                        
                        <textarea name="comemnt" id="comment" cols="" rows="3" className="form-control" placeholder="comments here"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="submit" className="btn btn-primary btn-sm"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateComment;