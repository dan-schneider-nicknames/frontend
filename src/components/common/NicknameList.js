import React from 'react'
import Nickname from './Nickname'

export default function NicknameList(props) {
    const { nicknames } = props.data
    return (
        <ul>
        {nicknames.map((nickname) => (
            <Nickname {...nickname} key={nickname.nickname_id} />
        ))}
      </ul>
    )
}
