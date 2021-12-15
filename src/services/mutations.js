import { gql } from "@apollo/client";

export const LOGIN_CALL = gql`
  mutation UserLogin($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const SIGNUP = gql`
  mutation Signup($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email)
  }
`;

export const ADD_NICKNAME = gql`
  mutation MakeNickname($nickname: String!) {
    addNickname(nickname: $nickname) {
      user {
        username
      }
    }
  }
`;

export const GET_NICKNAMES = gql`
  query {
    nicknames {
      nickname_id
      likes
      liked
      createdBy
      nickname
      user {
        username
      }
    }
  }
`;

export const GET_USER_NICKNAMES = gql`
  query Get_User_Nicknames($username: String!) {
    user(username: $username) {
      nicknames {
        likes
        liked
        createdBy
        nickname
        nickname_id
        user {
          username
        }
      }
    }
  }
`;

export const LIKE = gql`
  mutation Like($nickname_id: ID!) {
    likeNickname(nickname_id: $nickname_id)
  }
`;
