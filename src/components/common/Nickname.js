import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { DELETE_NICKNAME} from "../../services/mutations";
import styled from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

const StyledNickname = styled.li`
  list-style: none;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: solid ${({ theme }) => theme.colors.purple};
`;

export default function Nickname(props) {
  // const [like, { loading, error }] = useMutation(LIKE, {
    //   errorPolicy: "all",
    // });
    // const [userliked, toggleLiked] = useToggle(liked);
    
    // const totalLikes = useMemo(() => {
      //   return likes + (liked ? -1 : 0) + (userliked ? 1 : 0);
      // }, [userliked, liked, likes]);
      
      // const handleLike = () => {
        //   if (!loading) {
          //     like({ variables: { nickname_id } });
          //     toggleLiked();
          //   }
          // };
  const { user, nickname, likes, liked, nickname_id, createdBy } = props;
  const [delNick, {loading, error}] = useMutation(DELETE_NICKNAME, {
    errorPolicy: "all",
  });
        
  const handleDelete = () => {
    if (!loading) {
      delNick({ variables: { nickname_id } });
      window.location.reload();
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
      <LikeButton likes={likes} liked={liked} nickname_id={nickname_id}/>
      {createdBy && (
        <>
          {" "}
          <Button onClick={handleDelete}> Delete </Button>
          <Button>Edit</Button>{" "}
        </>
      )}
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
