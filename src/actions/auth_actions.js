//  Action to start the login function
const loginStart = () => {
    return {
        type : 'LOGIN_START'
    }
}


//  Action when the login is successful
const loginSuccess = (user) => {
    return {
        type : 'LOGIN_SUCCESS',
        payload : user
    }
}

//  Action when the login fails 
const loginError = (error) => {
    return {
        type : 'LOGIN_ERROR',
        payload : error
    }
}


//  Function that takes the username and password to login the user
export const loginUser = (username, password) => {
    async dispatch => {
        dispatch(loginStart());
    }
}