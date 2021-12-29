import React from "react";
import LazyQuery from "../common/HigherOrder/LazyQuery";
import RequestReset from "../common/Form/RequestReset"
import { REQUEST_RESET } from "../../services/queries";

export default function RequestResetPage() {
    return (
        <LazyQuery 
            query={REQUEST_RESET}
            Component={RequestReset}
        />
    )
}