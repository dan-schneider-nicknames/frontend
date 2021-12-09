import React, { useEffect } from 'react'
import Form from '../common/Form'
import { loginSchema } from '../../schemas/users'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../gqlStatements/mutations'
import { useNavigate } from 'react-router'

const initialState = {
    username: "",
    password: ""
}

export default function Login() {
    const navigate = useNavigate()
    const [login, { data }] = useMutation(LOGIN)

    const submit = form => login({ variables: form })

    useEffect(() => {
        if (data) {
            localStorage.setItem("token", data.addUser)
            navigate("/")
        }
    }, [data]) // eslint-disable-line

    return (
        <div>
            <Link to="/signup">Sign Up</Link>
            <h2>Login</h2>
            <Form 
                initialState={initialState}
                schema={loginSchema}
                submit={submit}
            />
        </div>
    )
}
