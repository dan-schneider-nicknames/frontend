
// import useAxiosAuth from "../hooks/useAxiosAuth"

export const SET_TOKEN = "SET_TOKEN"

export const setToken = token => ({
    type: SET_TOKEN, payload: token
})