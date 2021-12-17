import React from 'react'
import Input from './Input'
import Error from './Error'
import Button from "./Button"
import useForm from '../../../hooks/useForm'
import PropTypes from "prop-types"

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
                        key={`${value}input`}
                        name={value}
                        value={formState[value]}
                        handleChange={handleChange}
                    />
                )
            }
            {
                Object.keys(errors).map(value => 
                    <Error 
                        key={`${value}error`}
                        errorType={value}
                        error={errors[value]}
                    />
                )
            }
            <Button 
                type="reset"
                onClick={reset}
            >
                Reset
            </Button>
            <Button
                type="submit"
                disabled={disabled} 
            >
                Submit
            </Button>
        </form>
    )
}
Form.propTypes = {
    initialState: PropTypes.object.isRequired,
    schema: PropTypes.object,
    submit: PropTypes.func.isRequired
}