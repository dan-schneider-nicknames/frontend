import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Input from "./Input";
import Button from "./Button";
// import { ADD_NICKNAME } from "../../services/mutations";
// import options from "../../services/options";
// import { useMutation } from "@apollo/client";

export default function CreateNickname(props) {
  const { callMutation, data } = props
  const [nickname, setNickname] = useState("");
  // const [makeNickname, { loading, error, data }] = useMutation(ADD_NICKNAME, options);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    callMutation({ nickname });
  };

  useEffect(() => {
    if (data) {
      const { username } = data.addNickname.user;
      navigate(`/user/${username}`);
    }
  }, [data]); // eslint-disable-line

  const handleChange = (e) => {
    setNickname(e.target.value);
  };
  const disabled = useMemo(
    () => !nickname.includes("Dan") && !nickname.includes("Schneider"),
    [nickname]
  );

  return (
    <>
      <h2>Create a new Nickname</h2>
      <form onSubmit={submit}>
        <Input name="nickname" value={nickname} handleChange={handleChange} />
        {disabled && <p>Must contain 'Dan' or 'Schneider'</p>}
        <Button type="submit" disabled={disabled}>
          Submit
        </Button>
      </form>
    </>
  );
}