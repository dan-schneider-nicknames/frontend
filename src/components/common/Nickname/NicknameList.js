import React from 'react'
import Nickname from './Nickname'

const nicknameMap = nickname => (
    <Nickname {...nickname} key={nickname.nickname_id} />
)

export default function NicknameList(props) {
    const { nicknames } = props
    return (
        <ul>
            {nicknames?.map(nicknameMap)}
        </ul>
    )
}
