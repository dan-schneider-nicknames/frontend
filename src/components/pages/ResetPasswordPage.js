import React from "react";
import { useParams } from "react-router";
import LazyQuery from "../common/HigherOrder/LazyQuery";
import MutationCall from "../common/HigherOrder/MutationCall";
import RequestReset from "../common/Form/RequestReset"
import { REQUEST_RESET } from "../../services/queries";
import { RESET_PASSWORD } from "../../services/mutations";
import ResetPassword from "../common/Form/ResetPassword";

export default function ResetPasswordPage() {
    const { resetToken } = useParams()
    return resetToken ? (
        <MutationCall
            query={RESET_PASSWORD}
            Component={ResetPassword}
        />
    ) : (
        <LazyQuery 
            query={REQUEST_RESET}
            Component={RequestReset}
        />
    )
}