import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { GET_USER_NICKNAMES } from '../../services/mutations'
import { useQuery } from '@apollo/client'
import Loader from '../common/Loader'

export default function UserNicknames() {
    const { username } = useParams()
    const { data, loading, error } = useQuery(GET_USER_NICKNAMES, { 
        variables: { username } 
    })

    useEffect(() => {
        console.log(data)   
    }, [data])

    if (loading) return <Loader/>
    if (error) return <p>{error.message}</p>

    
    return (
        <div>
            
        </div>
    )
}
