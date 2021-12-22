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

export const LIKE = gql`
  mutation Like($nickname_id: ID!) {
    likeNickname(nickname_id: $nickname_id)
  }
`;

export const DELETE_NICKNAME = gql`
  mutation RemoveNickname($nickname_id: ID!) {
    deleteNickname(nickname_id: $nickname_id){
      nickname_id
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation Reset_Password(
    $email: String!,
    $password: String!,
    $confirmPassword: String!,
    $resetToken: String!
  ){
    resetPassword(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      resetToken: $resetToken
    )
  }
`
