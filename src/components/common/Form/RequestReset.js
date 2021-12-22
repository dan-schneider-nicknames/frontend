import React, { useState } from 'react'
import Input from "./Input"
import Button from "./Button"
import { StyledForm } from './Form'

export default function RequestReset(props) {
    const { data, query, error } = props
    const [email, setEmail] = useState("")
    const submit = e => {
        e.preventDefault()
        query({ email })
    }
    const handleChange = e => setEmail(e.target.value)
    
    if (data && !error) return <p>Check your email to reset your password!</p>
    return (
        <StyledForm onSubmit={submit}>
            <fieldset>
                <legend>Request a password reset</legend>
                <Input
                    name="email"
                    value={email}
                    handleChange={handleChange}
                />
                <Button type="submit">
                    Submit
                </Button>
            </fieldset>
        </StyledForm>
    )
}
