import React from 'react'
import { useQuery } from '@apollo/client'
import options from '../../../services/options'
import Loader from "../Loader"
import PropTypes from "prop-types"

export default function QueryCall(props) {
    
    const { query, Component, variables = {} } = props
    const { data, loading, error, refetch } = useQuery(query, {...options, variables})

    if (loading) return <Loader />;
    if (error) return <p>{error.message}</p>;

    return (
        <Component 
            data={data} 
            callQuery={refetch} 
            error={error}
        />
    )
}
QueryCall.propTypes = {
    query: PropTypes.object.isRequired,
    Component: PropTypes.func.isRequired,
    variables: PropTypes.object
}