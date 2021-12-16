import React from 'react'
import { useQuery } from '@apollo/client'
import options from '../../../services/options'
import Loader from "../Loader"

export default function QueryCall(props) {
    
    const { query, Component, variables = {} } = props
    const { data, loading, error } = useQuery(query, {...options, variables})

    if (loading) return <Loader />;
    if (error) return <p>{error.message}</p>;

    return (
        <Component data={data}/>
    )
}
