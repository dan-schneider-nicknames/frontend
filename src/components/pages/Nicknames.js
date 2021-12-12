import React from 'react'
import { GET_NICKNAMES } from '../../services/mutations'
import { useQuery } from '@apollo/client'
import Loader from "../common/Loader"
import Nickname from "../common/Nickname"

export default function Nicknames() {
    const { data, loading, error } = useQuery(GET_NICKNAMES, { errorPolicy: "all" })

    if (loading) return <Loader/>
    if (error) return <p>{error.message}</p>
    return (
        <div>
            {data.nicknames.map(nickname => 
                <Nickname {...nickname} key={nickname.nickname_id}/>
            )}
        </div>
    )
}
