import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  ${({ theme }) => theme.setFont(2)}
  font-weight: 600;
  justify-content: space-between;
`;
const StyledInput = styled.input`
  display: flex;
  ${({ theme }) => theme.setFont(2)}
  font-weight: 600;
  margin: 1rem;
  text-align: center;
  width: min-content;
`;

export default function Input(props) {
  const { name, value, handleChange } = props;
  const title = name.toUpperCase().replace("_", " ");

  const possibleTypes = [
    "password",
    "date",
    "time",
    "number",
    "color",
    "email",
  ];

  const type = possibleTypes.reduce((finalType, currentType) => {
    return name.includes(currentType) ? currentType : finalType;
  }, "text");

  return (
    <>
      <StyledLabel htmlFor={name}>{title}:</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        placeholder={name.replace("_", " ")}
        value={value}
        type={type}
        onChange={handleChange}
      />
    </>
  );
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
};
