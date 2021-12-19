import React from 'react'
import Nickname from './Nickname'

const nicknameMap = nickname => (
    <Nickname {...nickname} key={nickname.nickname_id} />
)

export default function NicknameList(props) {
    const { nicknames, user } = props.data
    return (
        <ul>
            {nicknames?.map(nicknameMap)}
            {user?.nicknames?.map(nicknameMap)}
      </ul>
    )
}
