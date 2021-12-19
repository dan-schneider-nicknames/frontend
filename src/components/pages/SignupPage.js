import React from 'react'
import MutationCall from '../common/HigherOrder/MutationCall'
import Signup from '../common/Form/Signup'
import { SIGNUP } from "../../services/mutations";

export default function SignupPage() {
    return (
       <MutationCall query={SIGNUP} Component={Signup} errorMessage="Username, Email, and Password must be unique"/>
    )
}
