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
                setTimeout(()=>{
                    dispatch(removeError())        
                }, 1000)
            }else{

                localStorage.setItem('user', JSON.stringify(data.user))
                localStorage.setItem('token', data.token)
                return dispatch(loginSuccess(data.user))
            }
        }).catch(err => {
            return dispatch(loginError(err))
        })
    }
}