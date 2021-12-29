import React from 'react'
import { RESET_PASSWORD } from "../../services/mutations";
import ResetPassword from "../common/Form/ResetPassword";
import MutationCall from "../common/HigherOrder/MutationCall";

export default function ResetPasswordPage() {
    return (
        <MutationCall
            query={RESET_PASSWORD}
            Component={ResetPassword}
        />
    )
}
