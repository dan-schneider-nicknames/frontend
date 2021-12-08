import { gql } from "@apollo/client"

export const LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password)
    }
`

export const SIGNUP = gql`
    mutation Signup($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email)
    }
`