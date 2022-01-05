import React from 'react'
import { useParams } from 'react-router'
import { GET_USER_NICKNAMES } from '../../services/queries'
import QueryCall from '../common/HigherOrder/QueryCall'
import NicknameList from '../common/Nickname/NicknameList'

const queryCallback = (props) => {
    const { nicknames } = props.data.user
    return (
        <NicknameList nicknames={nicknames}/>
    )
}

export default function UserNicknames() {
    const { username } = useParams()
    
    return (
        <div>
            {username && <h2>{username}'s Nicknames</h2>}
            <QueryCall 
                Component={queryCallback}
                query={GET_USER_NICKNAMES}
                variables={{ username }}
            />
        </div>
    )
}
