import React from 'react'
import useToggle from '../../hooks/useToggle'

export default function Nickname(props) {
    const { username, nickname, likes } = props

    const [liked, toggleLiked] = useToggle(false) // check if user like this nickname

    const handleLike = () => {
        // make api call updating like
        toggleLiked()
    }

    return (
        <li>
            <h3 data-testid="nickname">
                {nickname}
            </h3>
            <h4 data-testid="creator">
                Created by {username}
            </h4>
            <span data-testid="likes">
                {likes} Likes
            </span>
            <button 
                data-testid="like-btn" 
                onClick={handleLike}
            >
                {liked && "un"}like
            </button>
        </li>
    )
}
