import * as yup from 'yup';

const resetSchema =yup.object().shape({
    email: yup.string().email().trim().required(),
    password: yup.string().required().trim().min(6),
    confirmPassword: yup.string().required().trim().min(6),
    // resetToken: yup.string().required(),
}) 


export default resetSchema