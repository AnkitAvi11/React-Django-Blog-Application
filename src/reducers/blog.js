const init_state = {
    loading : false,
    error : null,
    status : true,
    blog : null
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
            status : true
        }

        case 'SAVE_ERROR' : return {
            ...state,
            loading : false,
            error : action.payload,
            status : false
        }
        
        default : return state
        
    }
}