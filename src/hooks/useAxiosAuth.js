import axios from "axios"

const useAxiosAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        headers: {
            Authorization: token
        }
        // baseUrl: 
    })
}

export default useAxiosAuth