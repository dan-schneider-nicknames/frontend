import { SET_TOKEN } from "./actions"

const initialState = {
    token: localStorage.getItem("token")
} 

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type) {
        case SET_TOKEN:
            localStorage.setItem("token", payload)
            return {
                ...state,
                token: payload
            }
        default:
            return state
    }
}

export default reducer