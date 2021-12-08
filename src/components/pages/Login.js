import React, { useEffect } from 'react'
import Form from '../common/Form'
import { loginSchema } from '../../schemas/users'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../gqlStatements/mutations'

const initialState = {
    username: "",
    password: ""
}

export default function Login() {
    const [login, { data, loading, error }] = useMutation(LOGIN)

    const onSubmit = form => {
        login({ variables: form })
    }
    

    useEffect(() => {
        console.table(data)
        console.table(error)
    }, [loading])

    return (
        <div>
            <Link to="/signup">Sign Up</Link>
            <h2>Login</h2>
            <Form 
                initialState={initialState}
                schema={loginSchema}
                submit={onSubmit}
            />
        </div>
    )
}
