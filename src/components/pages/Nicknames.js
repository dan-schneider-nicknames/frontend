import React from 'react'
import { GET_NICKNAMES } from '../../gqlStatements/mutations'
import { useQuery } from '@apollo/client'
import Loader from "../common/Loader"

export default function Nicknames() {
    const { data, loading, error } = useQuery(GET_NICKNAMES)

    if (loading) return <Loader/>
    if (error) console.log(error)
    console.log(data)
    return (
        <div>
            {/* {data.nicknames.map()} */}
        </div>
    )
}
