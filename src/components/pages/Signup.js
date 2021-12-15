import React, { useEffect } from "react";
import Form from "../common/Form";
import { signupSchema } from "../../schemas/users";
import { SIGNUP } from "../../services/mutations";
import options from "../../services/options";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { setToken } from "../../state/actions";

const initialState = {
  email: "",
  username: "",
  password: "",
};

function Signup(props) {
  const { setToken } = props;
  const navigate = useNavigate();
  const [signup, { data, loading, error }] = useMutation(SIGNUP, options);

  const submit = (form) => signup({ variables: form });

  useEffect(() => {
    if (data && !error) {
      setToken(data.addUser);
      navigate("/");
      window.location.reload()
    }
  }, [data]); // eslint-disable-line

  return (
    <div>
      <h2>Sign Up:</h2>
      <Form initialState={initialState} schema={signupSchema} submit={submit} />
      {loading && <p>Loading...</p>}
      {error && <p>Username & Email must be unique</p>}
    </div>
  );
}

export default connect(null, { setToken })(Signup);
