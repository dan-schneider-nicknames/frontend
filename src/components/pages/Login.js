import React, { useEffect } from "react";
import Form from "../common/Form";
import { loginSchema } from "../../schemas/users";
import { useMutation } from "@apollo/client";
import { LOGIN_CALL } from "../../services/mutations";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { setToken } from "../../state/actions";

const initialState = {
  username: "",
  password: "",
};

function Login(props) {
  const { setToken } = props;

  const navigate = useNavigate();
  const [loginCall, { data, error, loading }] = useMutation(LOGIN_CALL, {
    errorPolicy: "all",
  });

  const submit = (form) => {
    loginCall({ variables: form });
  };

  useEffect(() => {
    if (data && !error) {
      setToken(data.login);
      navigate("/");
    }
  }, [data]); // eslint-disable-line

  return (
    <div>
      <h2>Login</h2>
      <Form initialState={initialState} schema={loginSchema} submit={submit} />
      {loading && <p>Loading...</p>}
      {error && <p>Invalid Credentials</p>}
    </div>
  );
}

export default connect(null, { setToken })(Login);
