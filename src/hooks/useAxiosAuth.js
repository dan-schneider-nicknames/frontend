import axios from "axios"

const useAxiosAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "https://schneider-nicknames.herokuapp.com/"
    })
}

export default useAxiosAuth