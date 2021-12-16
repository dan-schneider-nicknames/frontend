import React from 'react'
import Nickname from './Nickname'

export default function NicknameList(props) {
    const { nicknames, user } = props.data
    return (
        <ul>
            {nicknames?.map((nickname) => (
                <Nickname {...nickname} key={nickname.nickname_id} />
            ))}
            {user?.nicknames?.map((nickname) => (
                <Nickname {...nickname} key={nickname.nickname_id} />
            ))}
      </ul>
    )
}
