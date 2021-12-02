import React from 'react'
import Form from "../common/Form"
import { signupSchema } from "../../schemas/users"

const initialState = {
    email: "",
    username: "",
    password: "",
}

export default function Signup() {
    const submit = () => {}
    
    return (
        <div>
            <Form 
                initialState={initialState} 
                schema={signupSchema}
                submit={submit}
            />
        </div>
    )
}
