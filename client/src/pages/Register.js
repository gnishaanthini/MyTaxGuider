import { useState, useEffect } from 'react'
import { FormRow, Logo, Alert } from '../components'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
    username: '',
    password: '',
    userType: 'Customer',
    isMember: true,
}

const Register = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState)
    const {
        user,
        isLoading,
        showAlert,
        displayAlert,
        registerUser
    } = useAppContext()

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { username, password, userType, isMember } = values
        if(!username || !password) {
            displayAlert()
            return
        }
        const currentUser = { username, password, userType }
        if (isMember) {
            // loginUser(currentUser)
        } else {
            registerUser(currentUser)
        }
    }

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }, [user, navigate])

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo className='logo' />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>

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

                <p>
                    {values.isMember ? 'Not a member yet! ' : 'Already a member! '}
                    <button type='button' onClick={toggleMember} className='member-btn'>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register