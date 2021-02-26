//  Action to start the login function
const loginStart = () => {
    console.log('Login start')
    return {
        type : 'LOGIN_START'
    }
}


//  Action when the login is successful
const loginSuccess = (user) => {
    console.log('Login success')
    return {
        type : 'LOGIN_SUCCESS',
        payload : user
    }
}

//  Action when the login fails 
const loginError = (error) => {
    console.log('Login error')
    return {
        type : 'LOGIN_ERROR',
        payload : error
    }
}

const removeError = () => {
    console.log('Removing error')
    return {
        type : 'REMOVE_ERROR'
    }
}


//  Function that takes the username and password to login the user
export const loginUser = (username, password) => {
    return async dispatch => {
        await dispatch(loginStart());
        let formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
        fetch('http://127.0.0.1:8000/api/auth/login/', {
            method : 'POST',
            body : formData,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.message) {
                dispatch(loginError(data.message))
                
            }else{

                localStorage.setItem('user', JSON.stringify(data.user))
                localStorage.setItem('token', data.token)
                return dispatch(loginSuccess(data.user))
            }
        }).catch(err => {   
            dispatch(loginError("Some error has occurred"))
            
        })
    }
}

//  signup process start
const signup_start = () => {
    return {
        type : 'SIGNUP_START'
    }
}

const signup_success = (user) => {
    return {
        type : 'SIGNUP_SUCCESS',
        payload : user
    }
}

const signup_error = (err) => {
    return {
        type : 'SIGNUP_ERROR',
        payload : err
    }
}

const removeuser = () => {
    return {
        type : 'REMOVE_USER'
    }
}


//  signup action for registeration of the users
export const signupUserAction = (fname, username, email, password) => {
    return async dispatch => {
        await dispatch(signup_start());
        let formData = new FormData()
        formData.append('fname', fname)
        formData.append('username', username)
        formData.append('email', email)
        formData.append('password', password)

        fetch('http://127.0.0.1:8000/api/auth/signup/', {
            method : 'POST',
            body : formData,
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.message) {
                dispatch(signup_error(data.message))
                setTimeout(()=>{
                    dispatch(removeError())        
                }, 0)
            }else{
                dispatch(signup_success(data.user))
                setTimeout(()=>{
                    dispatch(removeuser())        
                }, 0)
            }
        }).catch(err => {
            console.log(err)
        })
    }
}


export const logoutUser = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.reload()
}


export const authStateValidation = () => {
    return async dispatch => {

        let token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

        fetch('http://127.0.0.1:8000/api/auth/validate/', {
            headers : {
                'Authorization' : 'Token ' + token
            }
        }).then(res => res.json())
        .then(data => {
            if(data.user) {
                localStorage.setItem('user', JSON.stringify(data.user))
                localStorage.setItem('token', token)
                return dispatch(loginSuccess(data.user))
            }else{
                localStorage.removeItem('token')
                localStorage.removeItem('user')

            }
        }).catch(err => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        })
        
    }
}
