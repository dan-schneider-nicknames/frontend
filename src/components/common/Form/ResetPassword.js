import React from 'react';
import Form from './Form';
import PropTypes from "prop-types";
import resetSchema from "../../../schemas/reset";
import { useParams } from 'react-router';

const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
}


export default function ResetPassword(props) {
    const { resetToken } = useParams()
    const { data, callMutation } = props

    const submit = formState => {
        callMutation({ ...formState, resetToken })
    }
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
    data: PropTypes.arrayOf(),
    callMutation: PropTypes.func.isRequired
}