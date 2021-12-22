import React from 'react';
import Form from './Form';
import PropTypes from "prop-types";
import { resetSchema } from "../../../schemas/reset";
import { useParams } from 'react-router';

const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    resetToken: '',
}


export default function ResetPassword(props) {
    const { resetToken } = useParams()
    const { data, callMutation } = props

    return (
        <Form
            title="Reset Password"
            initialState={initialState}
            schema={resetSchema}
            submit={callMutation}
        />
    )
}

ResetPassword.propTypes = {
    data: PropTypes.arrayOf(),
    callMutation: PropTypes.func.isRequired
}