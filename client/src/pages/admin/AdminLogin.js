import { useState, useEffect } from 'react'
import { FormRow, Logo, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/RegisterPage'

const initialState = {
    username: '',
    password: '',
    userType: 'Admin',
}

const AdminLogin = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState)
    const {
        user,
        isLoading,
        showAlert,
        displayAlert,
        loginUser
    } = useAppContext()

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { username, password, userType } = values
        if(!username || !password) {
            displayAlert()
            return
        }
        const currentUser = { username, password, userType }
        
        loginUser(currentUser)
    }

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/home')
            }, 3000)
        }
    }, [user, navigate])

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo className='logo' />
                <h3>Login</h3>

                {showAlert && <Alert />}

                {/* email input */}
                <FormRow
                    type='username'
                    name='username'
                    value={values.username}
                    handleChange={handleChange}
                />

                <FormRow
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />

                <button type='submit' className='btn btn-block' disabled={isLoading}>
                    submit
                </button>
            </form>
        </Wrapper>
    )
}

export default AdminLogin