import React from 'react'
import Loader from "../Loader"
import { useMutation } from '@apollo/client'
import options from '../../../services/options'

export default function MutationCall(props) {
    const { query, Component } = props
    const [mutation, { data, loading, error }] = useMutation(query, options);

    const callMutation = variables => mutation({ variables })
    
    return (
        <div>
            <Component 
                callMutation={callMutation} 
                data={data}
            />
            {loading && <Loader/>}
            {error && <p>{error.message}</p>}
        </div>
    )
}
