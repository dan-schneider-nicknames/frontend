import { useEffect, useState } from "react"
import * as yup from 'yup'

const useForm = (initialState, schema) => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState(initialState)
  const [disabled, setDisabled] = useState(true)
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));
  }
  
  const handleChange = e => {
    const { type, name, checked, value } = e.target
    const newValue = type === "checkbox" ? checked : value
    setForm({ ...form, [name]: newValue })
    if (schema) validate(name, newValue)
  }
  
  const reset = () => setForm(initialState)

  useEffect(() => {
    if (schema) {
      schema.isValid(form)
        .then(() => setDisabled(false))
        .catch(() => setDisabled(true))
    }
  }, [form]) //eslint-disable-line
  
  return [form, handleChange, reset, errors, disabled]
} 

export default useForm