import React, { useEffect } from "react";
import Form from "../common/Form";
import { loginSchema } from "../../schemas/users";
import { useMutation } from "@apollo/client";
import { LOGIN_CALL } from "../../services/mutations";
import options from "../../services/options";
import { connect } from "react-redux";
import { setToken } from "../../state/actions";
import { useNavigate } from "react-router";

const initialState = {
  username: "",
  password: "",
};

function Login(props) {
  const { setToken } = props;
  const navigate = useNavigate()

  const [loginCall, { data, error, loading }] = useMutation(LOGIN_CALL, options);

  const submit = (form) => loginCall({ variables: form });


  useEffect(() => {
    if (data && !error) {
      setToken(data.login);
      navigate("/")
      window.location.reload()
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
