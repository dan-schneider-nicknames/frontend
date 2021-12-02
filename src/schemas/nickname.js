import * as yup from "yup"

export default yup.object().shape({
    nickname: yup.string().matches("Dan" || "Schneider")
})