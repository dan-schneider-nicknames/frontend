import React, { useEffect } from 'react'
import Form from '../common/Form'
import { loginSchema } from '../../schemas/users'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_CALL } from '../../gqlStatements/mutations'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'
import { setToken } from "../../state/actions"

const initialState = {
    username: "",
    password: ""
}

function Login(props) {
    const { setToken } = props

    const navigate = useNavigate()
    const [loginCall, { data }] = useMutation(LOGIN_CALL)

    const submit = form => loginCall({ variables: form })

    useEffect(() => {
        if (data) {
            setToken(data.login)
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


export default connect(null, { setToken })(Login)
