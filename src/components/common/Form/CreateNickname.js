import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Input from "./Input";
import Button from "./Button";
import { StyledForm } from "./Form";

export default function CreateNickname(props) {
  const { callMutation, data, error, loading } = props;
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    callMutation({ nickname });
  };

  useEffect(() => {
    if (data && !error && !loading) {
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
      <StyledForm onSubmit={submit}>
        <fieldset>
          <legend>Create a new Nickname</legend>
          <Input name="nickname" value={nickname} handleChange={handleChange} />
          {disabled && <p>Must contain 'Dan' or 'Schneider'</p>}
          <Button type="submit" disabled={disabled}>
            Submit
          </Button>
        </fieldset>
      </StyledForm>
    </>
  );
}
