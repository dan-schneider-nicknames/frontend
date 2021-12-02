import { useEffect, useState } from "react"
import * as yup from "yup"

const useForm = (initialState, schema) => {
  const [form, setForm] = useState(initialState)
  const [error, setError] = useState(initialState)
  const [disbaled, setDisbaled] = useState(true)
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setError({ ...error, [name]: "" }))
      .catch(err => setError({ ...error, [name]: err.errors[0] }));
  }
  
  const handleChange = e => {
    const { type, name, checked, value } = e.target
    const newValue = type === "checkbox" ? checked : value
    setForm({ ...form, [name]: newValue })
    schema && validate(name, newValue)
  }
  
  const reset = () => setForm(initialState)

  useEffect(() => {
    if (schema) {
      schema.isValid(form)
        .then(() => setDisbaled(false))
        .catch(() => setDisbaled(true))
    }
  }, [form, schema])
  
  return [form, handleChange, reset, error, disbaled]
} 

export default useForm