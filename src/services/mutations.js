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
    query {
        nicknames {
            nickname_id
            likes
            nickname
            user {
                username
            }
        }
    }
`

export const GET_USER_NICKNAMES = gql`
    query Get_User_Nicknames($username: String!) {
        user(username: $username) {
            nicknames {
                likes
                nickname
                nickname_id
            }
        }
    }
`


export const LIKE = gql`
    mutation Like($nickname_id: ID!) {
        likeNickname(nickname_id: $nickname_id) 
    }
`