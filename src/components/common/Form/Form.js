import React from "react";
import Input from "./Input";
import Error from "./Error";
import Button from "./Button";
import useForm from "../../../hooks/useForm";
import PropTypes from "prop-types";
import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  fieldset {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 80%;
    border: solid ${({ theme }) => theme.colors.blue};
    @media (max-width: 400px) {
      width: 95%;
    }
  }
  legend {
    ${({ theme }) => theme.setFont(3)}
    margin-left: 5rem;
    @media (max-width: 550px){
      text-align: center;
      margin-left: 0;
    }
  }
`;

export default function Form(props) {
  const { title, initialState, schema, submit } = props;
  const [formState, handleChange, reset, errors, disabled] = useForm(
    initialState,
    schema
  );

  const onSubmit = (e) => {
    e.preventDefault();
    submit(formState);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <fieldset>
        <legend>{title}</legend>
        {Object.keys(formState).map((value) => (
          <Input
          key={`${value}input`}
          name={value}
          value={formState[value]}
          handleChange={handleChange}
          />
          ))}
        {Object.keys(errors).map((value) => (
          <Error
          key={`${value}error`}
          errorType={value}
          error={errors[value]}
          />
          ))}
        <Button type="reset" onClick={reset}>
          Reset
        </Button>
        <Button type="submit" disabled={disabled}>
          Submit
        </Button>
      </fieldset>
    </StyledForm>
  );
}
Form.propTypes = {
  initialState: PropTypes.object.isRequired,
  schema: PropTypes.object,
  submit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
