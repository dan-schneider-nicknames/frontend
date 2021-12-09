import React from 'react'
import useToggle from '../../hooks/useToggle'
import PropTypes from "prop-types"

export default function Nickname(props) {
    const { user, nickname, likes } = props

    const [liked, toggleLiked] = useToggle(false) // check if user like this nickname

    const handleLike = () => {
        // make api call updating like
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
