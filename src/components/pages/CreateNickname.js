import React, { useMemo, useState } from 'react'
import Input from "../common/Input"

export default function CreateNickname() {
    const [nickname, setNickname] = useState("")

    const submit = e => {
        e.preventDefault()
    }

    const handleChange = e => {
        setNickname(e.target.value)
    }
    const disabled = useMemo(() => 
        !nickname.includes("Dan") && !nickname.includes("Schneider")
    , [nickname])

    return (
        <div>
            <h2>Create a new Nickname</h2>
            <form onSubmit={submit}>
                <Input 
                    name="nickname" 
                    value={nickname}
                    handleChange={handleChange}
                />
                {disabled && <p>Must contain 'Dan' or 'Schneider'</p>}
                <button type="submit" disabled={disabled}>
                    Submit
                </button>
            </form>
        </div>
    )
}
