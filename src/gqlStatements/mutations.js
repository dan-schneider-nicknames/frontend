import { gql } from "@apollo/client"

export const LOGIN_CALL = gql`
    mutation UserLogin($username: String!, $password: String!) {
        login(username: $username, password: $password)
    }
`

export const SIGNUP = gql`
    mutation Signup($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email)
    }
`

export const GET_NICKNAMES = gql`
    query nicknames {
        nickname_id
    }
`

export const LIKE = gql`
    mutation Like($nickname_id: Integer!) {
        likeNickname(nickname_id: $nickname_id) {
            // tbc
        }
    }
`