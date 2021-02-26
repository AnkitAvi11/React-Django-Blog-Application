const init_state = {
    loading : false,
    error : null,
    blog : null,
    stat : false
}


const blogReducer = (state = init_state, action) => {
    switch(action.type) {

        case 'SAVE_START' : return {
            ...state,
            loading : true
        }

        case 'SAVE_SUCCESS' : return {
            ...state,
            loading : false,
            error : null,
            stat : true
        }

        case 'SAVE_ERROR' : return {
            ...state,
            loading : false,
            error : "Some errors have occurred",
        }
        
        default : return state
        
    }
}

export {blogReducer}