
// import useAxiosAuth from "../hooks/useAxiosAuth"

export const LOGIN = "LOGIN"

export const login = token => ({
    type: LOGIN, payload: token
})