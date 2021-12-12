import React from 'react'
import useToggle from '../../hooks/useToggle'
import PropTypes from "prop-types"
import { useMutation } from '@apollo/client'
import { LIKE } from '../../services/mutations'

export default function Nickname(props) {
    const { user, nickname, likes, nickname_id } = props
    const [like] = useMutation(LIKE, { errorPolicy: "all" })
    const [liked, toggleLiked] = useToggle(false) // check if user like this nickname

    const handleLike = () => {
        like({ variables: { nickname_id } })
        toggleLiked()
    }

    return (
        <li>
            <h3>{nickname}</h3>
            <h4>created by {user.username}</h4>
            <span>{likes + (liked ? 1 : 0)} Likes</span>
            <button onClick={handleLike}>
                {liked && "un"}like
            </button>
        </li>
    )
}
Nickname.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
    }),
    nickname: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
}
