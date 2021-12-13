import React from 'react'
import { useParams } from 'react-router'
import { GET_USER_NICKNAMES } from '../../services/mutations'
import { useQuery } from '@apollo/client'
import Loader from '../common/Loader'
import Nickname from '../common/Nickname'

export default function UserNicknames() {
    const { username } = useParams()
    const { data, loading, error } = useQuery(GET_USER_NICKNAMES, { 
        variables: { username } 
    })

    if (loading) return <Loader/>
    if (error) return <p>{error.message}</p>
    
    return (
        <div>
            <h2>{username}'s Nicknames</h2>
            {
                data.user.nicknames.map(nickname => 
                    <Nickname 
                        key={nickname.nickname_id} 
                        {...nickname}
                    />
                )
            }
        </div>
    )
}
