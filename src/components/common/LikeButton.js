import React, { useMemo } from "react";
import useToggle from "../../hooks/useToggle";
import { useMutation } from "@apollo/client";
import { LIKE } from "../../services/mutations";
import options from "../../services/options";
import Button from "../common/Button";


export default function LikeButton(props) {
  const { likes, liked, nickname_id } = props;
  const [like, { loading, error }] = useMutation(LIKE, options);

  const [userliked, toggleLiked] = useToggle(liked);

  const totalLikes = useMemo(() => {
    return likes + (liked ? -1 : 0) + (userliked ? 1 : 0);
  }, [userliked, liked, likes]);

  const handleLike = () => {
    if (!loading) {
      like({ variables: { nickname_id } });
      toggleLiked();
    }
  };

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <Button onClick={handleLike}>{totalLikes} Likes</Button>
    </div>
  );
}
