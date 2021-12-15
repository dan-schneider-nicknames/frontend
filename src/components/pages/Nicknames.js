import React from 'react'
import { GET_NICKNAMES } from '../../services/queries'
import options from '../../services/options'
import { useQuery } from '@apollo/client'
import Loader from "../common/Loader"
import Nickname from "../common/Nickname"

export default function Nicknames() {
    const { data, loading, error } = useQuery(GET_NICKNAMES, options)

    // useEffect(() => {
    //     console.log(data)
    // }, [data])
    
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
