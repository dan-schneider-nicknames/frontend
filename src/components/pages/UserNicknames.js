import React from 'react'
import { useParams } from 'react-router'
import { GET_USER_NICKNAMES } from '../../services/queries'
import QueryCall from '../common/HigherOrder/QueryCall'
import NicknameList from '../common/Nickname/NicknameList'

export default function UserNicknames() {
    const { username } = useParams()
    
    return (
        <div>
            <h2>{username}'s Nicknames</h2>
            <QueryCall 
                Component={NicknameList}
                query={GET_USER_NICKNAMES}
                variables={{ username }}
            />
        </div>
    )
}
