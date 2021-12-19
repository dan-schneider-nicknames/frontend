import React from 'react'
import Loader from "../Loader"
import { useMutation } from '@apollo/client'
import options from '../../../services/options'
import PropTypes from "prop-types"

export default function MutationCall(props) {
    const { query, Component, errorMessage } = props
    const [mutation, { data, loading, error }] = useMutation(query, options);

    const callMutation = variables => mutation({ variables })
    
    return (
        <div>
            <Component 
                callMutation={callMutation} 
                data={data}
            />
            {loading && <Loader/>}
            {error && <p>{errorMessage || error.message}</p>}
        </div>
    )
}

MutationCall.propTypes = {
    query: PropTypes.object.isRequired,
    Component: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}
