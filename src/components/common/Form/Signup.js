import React, { useEffect } from "react";
import Form from "./Form";
import { signupSchema } from "../../../schemas/users";
import { useNavigate } from "react-router";
import PropTypes from "prop-types"

const initialState = {
  email: "",
  username: "",
  password: "",
};

function Signup(props) {
  const { data, callMutation } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.addUser) {
      localStorage.setItem("token", data.addUser);
      navigate("/frontend/");
      window.location.reload()
    }
  }, [data]); // eslint-disable-line

  return (
    <Form
      title="Sign Up:"
      initialState={initialState}
      schema={signupSchema}
      submit={callMutation} 
    />
  );
}

Signup.propTypes = {
  data: PropTypes.shape({
    addUser: PropTypes.string.isRequired
  }),
  callMutation: PropTypes.func.isRequired
}

export default Signup;
