import React from 'react';

const loader = (props) => {
    return (
        <div style={{textAlign:"center", marginTop : "50px"}}>
            <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <h4 style={{marginTop : "30px"}}>Loading ...</h4>
        </div>
    )
}

export default loader;