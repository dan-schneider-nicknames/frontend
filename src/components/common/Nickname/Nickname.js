import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { DELETE_NICKNAME} from "../../../services/mutations";
import options from "../../../services/options";
import styled from "styled-components";
import Button from "../Form/Button";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

const StyledNickname = styled.li`
  list-style: none;
  font-family: "Fredoka One", cursive;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border: solid ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.orange};
  @media (max-width: 400px) {
    text-align: center;
  }
`;

export default function Nickname(props) {
  const { user, nickname, nickname_id, createdBy, ...rest } = props;
  const { username } = user
  const [delNick, { data, loading, error }] = useMutation(DELETE_NICKNAME, options);
        
  const handleDelete = () => {
    if (!loading) {
      delNick({ variables: { nickname_id } });
    }
  };
  
  useEffect(() => {
    if (data) {
      window.location.reload();
    }
  }, [data])

  if (error) return <p>{error.message}</p>;

  return (
    <StyledNickname>
      <h3>{nickname}</h3>
      <Link to={`/frontend/user/${username}`}>
        <Button className="creator">
          By {username}
        </Button>
      </Link>
      <LikeButton {...rest} nickname_id={nickname_id}/>
      {createdBy && (
        <Button onClick={handleDelete}> 
          Delete 
        </Button>
      )}
    </StyledNickname>
  );
}

export const NicknamePropTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
  nickname: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  createdBy: PropTypes.bool.isRequired,
}

Nickname.propTypes = NicknamePropTypes;
