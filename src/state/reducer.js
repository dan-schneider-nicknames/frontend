import { LOGIN } from "./actions"
const initialState = {
    nicknames: [],
    token: localStorage.getItem("token")
} 

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type) {
        case LOGIN:
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