import React, { useEffect } from 'react';
import Form from './Form';
import PropTypes from "prop-types";
import resetSchema from "../../../schemas/reset";
import { useParams, useNavigate } from 'react-router';

const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
}

export default function ResetPassword(props) {
    const { resetToken } = useParams()
    const { data, callMutation } = props
    const navigate = useNavigate()
    
    const submit = formState => {
        callMutation({ ...formState, resetToken })
    }
    
    useEffect(() => {
        if (data?.resetPassword) {
          localStorage.setItem("token", data.resetPassword)
          navigate("/frontend/")
          window.location.reload()
        }
      }, [data]); // eslint-disable-line

    return (
        <Form
            title="Reset Password"
            initialState={initialState}
            schema={resetSchema}
            submit={submit}
        />
    )
}

ResetPassword.propTypes = {
    callMutation: PropTypes.func.isRequired
}