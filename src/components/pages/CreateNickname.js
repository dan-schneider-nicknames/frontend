import React, { useMemo, useState } from 'react'


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
                <label htmlFor="nickname">
                    <input 
                        type="text" 
                        id="nickname" 
                        name="nickname"
                        onChange={handleChange}
                        value={nickname}
                    />
                </label>
                {disabled && <p>Must contain 'Dan' or 'Schneider'</p>}
                <button type="submit" disabled={disabled}>
                    Submit
                </button>
            </form>
        </div>
    )
}
