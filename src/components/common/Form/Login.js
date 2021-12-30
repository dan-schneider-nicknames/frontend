import React, { useEffect } from "react";
import Form from "./Form";
import { loginSchema } from "../../../schemas/users";
import { useNavigate } from "react-router";
import LoginForgot from "../HigherOrder/LoginForgot";

const initialState = {
  username: "",
  password: "",
};

function Login(props) {
  const { data, callMutation } = props;
  const navigate = useNavigate()

  useEffect(() => {
    if (data?.login) {
      localStorage.setItem("token", data.login)
      navigate("/")
      window.location.reload()
    }
  }, [data]); // eslint-disable-line

  return (
    <Form
      title="Login: " 
      initialState={initialState} 
      schema={loginSchema} 
      submit={callMutation} 
      Component={LoginForgot}
    />
  );
}

export default Login;
