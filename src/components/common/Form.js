import React from 'react'
import Input from './Input'
import Error from './Error'
import useForm from '../../hooks/useForm'

export default function Form(props) {
    const { initialState, schema, submit } = props
    const [formState, handleChange, reset, errors, disabled] = useForm(initialState, schema)

    const onSubmit = e => {
        e.preventDefault()
        submit(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            {
                Object.keys(formState).map(value => 
                    <Input 
                        name={value}
                        value={formState[value]}
                        handleChange={handleChange}
                    />
                )
            }
            {
                Object.keys(errors).map(value => 
                    <Error 
                        errorType={value}
                        error={errors[value]}
                    />
                )
            }
            <button 
                type="reset"
                onClick={reset}
            >
                Reset
            </button>
            <button
                type="submit"
                disabled={disabled} 
            >
                Submit
            </button>
        </form>
    )
}