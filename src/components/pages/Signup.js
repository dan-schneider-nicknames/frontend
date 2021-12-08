import React from 'react'
import Form from "../common/Form"
import { signupSchema } from "../../schemas/users"
import { Link } from 'react-router-dom'

const initialState = {
    email: "",
    username: "",
    password: "",
}

export default function Signup() {
    const submit = () => {}
    
    return (
        <div>
            <Link to="/login">Login</Link>
            Sign Up:
            <Form 
                initialState={initialState} 
                schema={signupSchema}
                submit={submit}
            />
        </div>
    )
}
