import { gql } from "@apollo/client";

const wantedProperties = `
    nickname_id
    likes
    liked
    createdBy
    nickname
    user {
    username
    }
`;

export const GET_NICKNAMES = gql`
  query getNicknames($page: Int!){
    nicknames(page: $page) {
      ${wantedProperties}
    }
  }
`;

export const GET_USER_NICKNAMES = gql`
  query Get_User_Nicknames($username: String) {
    user(username: $username) {
      nicknames {
        ${wantedProperties}
      }
    }
  }
`;

export const REQUEST_RESET = gql`
  query Request_Reset($email: String!) {
    requestReset(email: $email)
  }
`