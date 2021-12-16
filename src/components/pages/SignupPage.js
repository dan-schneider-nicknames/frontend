import React from 'react'
import MutationCall from '../common/HigherOrder/MutationCall'
import Signup from './Signup'
import { SIGNUP } from "../../services/mutations";

export default function SignupPage() {
    return (
       <MutationCall query={SIGNUP} Component={Signup}/>
    )
}
