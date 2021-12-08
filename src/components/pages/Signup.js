import React from 'react'
import Form from "../common/Form"
import { signupSchema } from "../../schemas/users"
import { Link } from 'react-router-dom'
import axios from 'axios'

const initialState = {
    email: "",
    username: "",
    password: "",
}

export default function Signup() {
    const submit = form => {
        console.log(form)
        const { email, username, password } = form

        axios
            .post("https://schneider-nicknames.herokuapp.com/", {
                query: `
                    mutation {
                        addUser(email: ${email}, username: ${username}, password: ${password}) 
                    }
                `
            })
            .then(console.log)
            .catch(console.log)
    }
    
    return (
        <div>
            <Link to="/login">Login</Link>
            Sign Up:
            <Form 
                initialState={initialState} 
                schema={signupSchema}
                submit={submit}
            />
        </div>
    )
}
