
const draft_start = () => {
    return {
        type : 'SAVE_START'
    }
}

const create_success = () => {
    return {
        type : 'SAVE_SUCCESS'
    }
}

const blog_error = () => {
    return {
        type : 'SAVE_ERROR',
    }
}

export const publishBlogAction = ({title, description, body, cover_image}) => {
    return async dispatch => {

        //  starting the blog creation
        dispatch(draft_start());

        //  getting the form data from the user
        let formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('body', body);
        formData.append('cover_image', cover_image);

        fetch('http://127.0.0.1:8000/api/blog/create/', {
            method : 'POST',
            body : formData,
            headers : {
                'Authorization' : 'Token ' + localStorage.getItem('token')
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success) {
                dispatch(create_success(data.success))
            }else{
                dispatch(blog_error('Error occurred'))    
            }
        }).catch(err => {
            dispatch(blog_error('Error occurred'))
        })
    }
}
