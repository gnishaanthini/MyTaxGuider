import { useState, useEffect } from 'react'
import { FormRow, Logo, Alert } from '../components'
import { useAppContext } from '../context/AppContext'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useNavigate } from "react-router-dom";

const initialState = {
    username: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState(initialState)
    const {
        isLoading,
        showAlert
    } = useAppContext()
    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    const onSubmit = (e) => {
        let path = '/home'; 
        navigate(path);
        e.preventDefault()
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo className='logo' />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>

                {showAlert && <Alert />}

                {/* name input */}
                {
                    !values.isMember && <FormRow
                        type='text'
                        name='name'
                        value={values.name}
                        handleChange={handleChange}
                    />
                }

                {/* email input */}
                <FormRow
                    type='email'
                    name='email'
                    value={values.email}
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