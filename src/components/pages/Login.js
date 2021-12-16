import React, { useEffect } from "react";
import Form from "../common/Form/Form";
import { loginSchema } from "../../schemas/users";
import { connect } from "react-redux";
import { setToken } from "../../state/actions";
import { useNavigate } from "react-router";

const initialState = {
  username: "",
  password: "",
};

function Login(props) {
  const { setToken, data, callMutation } = props;
  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      setToken(data.login);
      navigate("/")
      window.location.reload()
    }
  }, [data]); // eslint-disable-line

  return (
    <>
      <h2>Login</h2>
      <Form initialState={initialState} schema={loginSchema} submit={callMutation} />
    </>
  );
}

export default connect(null, { setToken })(Login);
