import React, { useEffect } from "react";
import Form from "./Form";
import { signupSchema } from "../../../schemas/users";
import { useNavigate } from "react-router";

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
      navigate("/");
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

export default Signup;
