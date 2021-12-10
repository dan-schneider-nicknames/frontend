import React from 'react'
import Form from "../common/Form"
import schema from "../../schemas/nickname"

const initialState = {
    nickname: ""
}

export default function CreateNickname() {

    const submit = () => {}
    return (
        <div>
            <h2>Create a new Nickname</h2>
            <Form
                initialState={initialState}
                schema={schema}
                submit={submit}
            />
        </div>
    )
}
