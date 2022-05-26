import React, { useReducer, useContext } from 'react'
import axios from 'axios'

import { 
    DISPLAY_ALERT, 
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER
} from './actions'

import reducer from './reducer'

const user = localStorage.getItem('user')
const token = localStorage.getItem('token')

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user? JSON.parse(user): null,
    token: token,
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // axios
    const authFetch = axios.create({
        baseURL: '/api/v1'
    })

    // request
    authFetch.interceptors.request.use((config) => {
        config.headers.common['Authorization'] = `Bearer ${state.token}`
        return config
    }, (error) => {
        return Promise.reject(error)
    })

    // response
     authFetch.interceptors.response.use((response) => {
        return response
    }, (error) => {
        // console.log(error.response)
        if (error.response.status === 401) {
            // logoutUser()
        }
        return Promise.reject(error)
    })

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 3000)
    }

    const addUserToLocalStorage = ({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN })

        try {
            const response = await authFetch.post('/auth/register', currentUser)
            const { user, token } = response.data
            dispatch({ type: REGISTER_USER_SUCCESS, payload: {
                user,
                token
            } })
            // local storage
            addUserToLocalStorage({
                user,
                token
            })
        } catch (error) {
            dispatch({ type: REGISTER_USER_ERROR, payload: {
                msg: error.response.data.msg
            } })
        }

        clearAlert()
    }

    const loginUser = async (currentUser) => {
        dispatch({ type: LOGIN_USER_BEGIN })

        try {
            const { data } = await authFetch.post('/auth/login', currentUser)
            const { user, token } = data
            dispatch({ type: LOGIN_USER_SUCCESS, payload: {
                user,
                token
            } })
            // local storage
            addUserToLocalStorage({
                user,
                token
            })
        } catch (error) {
            dispatch({ type: LOGIN_USER_ERROR, payload: {
                msg: error.response.data.msg
            } })
        }

        clearAlert()
    }

    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER })
        removeUserFromLocalStorage()
    }

    return (
        <AppContext.Provider value={{ 
            ...state,
            displayAlert,
            clearAlert,
            registerUser,
            logoutUser
        }}>
        {children}
    </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }