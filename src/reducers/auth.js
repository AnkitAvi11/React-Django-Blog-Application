import { act } from "react-dom/test-utils"

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

export {loginReducer}