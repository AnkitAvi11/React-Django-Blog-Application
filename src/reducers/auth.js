let state = {
    error : null,
    loading : false,
    user : null
}

const loginReducer = (initial_state = state, action) => {
    switch(action.type) {
        case 'LOGIN_START' : return {
            ...initial_state,
            loading : true
        }

        case 'LOGIN_SUCCESS' : return {
            ...initial_state,
            loading : false,
            user : action.payload
        }

        case 'LOGIN_ERROR' : return {
            ...initial_state,
            loading : false,
            error : action.payload
        }

        case 'REMOVE_ERROR' : return {
            ...initial_state,
            error : null
        }

        default : return initial_state
    }
}


//  signup reducer 
const signupReducer = (initial_state = state, action) => {
    switch(action.type) {
        case 'SIGNUP_START' : return {
            ...initial_state,
            loading : true
        }
        case 'SIGNUP_SUCCESS' : return {
            ...initial_state,
            loading : false, 
            user : action.payload
        }
        case 'SIGNUP_ERROR' : return {
            ...initial_state,
            loading : false,
            error : action.payload
        }
        case 'REMOVE_ERROR' : return {
            ...initial_state,
            loading : false,
            error : null
        }
        case 'REMOVE_USER' : return {
            ...initial_state,
            user : null
        }
        default : return initial_state
    }
}

export { loginReducer, signupReducer }