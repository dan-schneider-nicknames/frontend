import React, { useEffect } from 'react'
import Form from "../common/Form"
import { signupSchema } from "../../schemas/users"
import { Link } from 'react-router-dom'
import { SIGNUP } from '../../gqlStatements/mutations'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'
import { login } from "../../state/actions"

const initialState = {
    email: "",
    username: "",
    password: "",
}

function Signup(props) {
    const { login } = props
    const navigate = useNavigate()
    const [signup, { data }] = useMutation(SIGNUP)

    const submit = form => signup({ variables: form })

    useEffect(() => {
        if (data) {
            login(data.addUser)
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

export default connect(null, { login })(Signup)
