
// import useAxiosAuth from "../hooks/useAxiosAuth"

export const MAKE_REQUEST = "MAKE_REQUEST"

export const makeRequest = () => ({
    type: MAKE_REQUEST
})

export const REPORT_ERROR = "REPORT_ERROR"

export const reportError = () => ({
    type: REPORT_ERROR
})

export const SET_NICKNAMES = "SET_NICKNAMES"

export const setNicknames = () => ({
    type: SET_NICKNAMES
})

export const getNicknames = () => dispatch => {
    dispatch(makeRequest())

}
