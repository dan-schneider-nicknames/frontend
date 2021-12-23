import React, { useEffect } from "react";
import Form from "./Form";
import { loginSchema } from "../../../schemas/users";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
      navigate("/frontend/")
      window.location.reload()
    }
  }, [data]); // eslint-disable-line

  return (
    <>
      <Form
        title="Login: " 
        initialState={initialState} 
        schema={loginSchema} 
        submit={callMutation} 
      />
      <Link to="/frontend/reset">
        Forgot Password?
      </Link>
    </>
  );
}

export default Login;
