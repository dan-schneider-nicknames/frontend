import React, { useEffect } from 'react'
import Form from "../common/Form"
import { signupSchema } from "../../schemas/users"
import { Link } from 'react-router-dom'
import { SIGNUP } from '../../gqlStatements/mutations'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router'

const initialState = {
    email: "",
    username: "",
    password: "",
}

export default function Signup() {
    const navigate = useNavigate()
    const [signup, { data }] = useMutation(SIGNUP)

    const submit = form => signup({ variables: form })

    useEffect(() => {
        if (data) {
            localStorage.setItem("token", data.addUser)
            navigate("/")
        }
    }, [data]) // eslint-disable-line

    
    return (
        <div>
            <Link to="/login">Login</Link>
            <h2>Sign Up:</h2>
            <Form 
                initialState={initialState} 
                schema={signupSchema}
                submit={submit}
            />
        </div>
    )
}
