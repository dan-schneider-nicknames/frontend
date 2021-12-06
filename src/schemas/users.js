import * as yup from "yup"

const shared = {
    username: yup.string().required().trim().min(6),
    password: yup.string().required().trim().min(6)
}

const loginSchema = yup.object().shape({
    ...shared
})

const signupSchema = yup.object().shape({
    ...shared,
    email: yup.string().email().trim(),
})


export {
    loginSchema,
    signupSchema
}