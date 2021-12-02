import React from 'react'
import Form from "../common/Form"

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
                submit={submit}
            />
        </div>
    )
}
