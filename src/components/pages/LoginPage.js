import React from 'react'
import MutationCall from '../common/HigherOrder/MutationCall'
import { LOGIN_CALL } from "../../services/mutations";
import Login from '../common/Form/Login';

export default function LoginPage() {
    return (
        <MutationCall 
            query={LOGIN_CALL} 
            Component={Login} 
            errorMessage="Invalid Credentials"
        />
    )
}
