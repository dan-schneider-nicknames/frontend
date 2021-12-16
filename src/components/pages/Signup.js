import React, { useEffect } from "react";
import Form from "../common/Form/Form";
import { signupSchema } from "../../schemas/users";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { setToken } from "../../state/actions";

const initialState = {
  email: "",
  username: "",
  password: "",
};

function Signup(props) {
  const { setToken, data, callMutation } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setToken(data.addUser);
      navigate("/");
      window.location.reload()
    }
  }, [data]); // eslint-disable-line

  return (
    <>
      <h2>Sign Up:</h2>
      <Form initialState={initialState} schema={signupSchema} submit={callMutation} />
    </>
  );
}

export default connect(null, { setToken })(Signup);
