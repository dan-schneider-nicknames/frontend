import React, { useMemo } from "react";
import useToggle from "../../hooks/useToggle";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { LIKE } from "../../services/mutations";
import styled from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const StyledNickname = styled.li`
  list-style: none;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: solid ${({ theme }) => theme.colors.purple};
`;

export default function Nickname(props) {
  const { user, nickname, likes, liked, nickname_id, createdBy } = props;
  const [like, { loading, error }] = useMutation(LIKE, {
    errorPolicy: "all",
  });
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

  console.log(props);

  return (
    <StyledNickname>
      <h3>{nickname}</h3>
      <Link to={`/user/${user.username}`}>
        <Button>By {user.username}</Button>
      </Link>
      <Button onClick={handleLike}>{totalLikes} Likes</Button>
      {createdBy && <> <Button> Delete </Button>
      <Button>Edit</Button> </>}
    </StyledNickname>
  );
}
Nickname.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
  nickname: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  createdBy: PropTypes.bool.isRequired,
};
