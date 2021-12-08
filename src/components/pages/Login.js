import React from 'react'
import Form from '../common/Form'
import { loginSchema } from '../../schemas/users'
import { Link } from 'react-router-dom'

const initialState = {
    username: "",
    password: ""
}

export default function Login() {

    const onSubmit = () => {}

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
