import React from 'react'
import { GET_NICKNAMES } from '../../services/mutations'
import { useQuery } from '@apollo/client'
import Loader from "../common/Loader"

export default function Nicknames() {
    const { data, loading, error } = useQuery(GET_NICKNAMES, { errorPolicy: "all" })

    if (loading) return <Loader/>
    console.log(data)
    return (
        <div>
            {error && <p>{error.message}</p>}
            {/* {data.nicknames.map()} */}
        </div>
    )
}
