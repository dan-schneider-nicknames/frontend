import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Input from "../common/Input";
import Button from "../common/Button";
import { ADD_NICKNAME } from "../../services/mutations";
import { useMutation } from "@apollo/client";

export default function CreateNickname() {
  const [nickname, setNickname] = useState("");
  const [makeNickname, { loading, error, data }] = useMutation(ADD_NICKNAME, {
    errorPolicy: "all",
  });

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    makeNickname({ variables: { nickname } });
  };

  useEffect(() => {
    if (data && !error) {
      const { username } = data.addNickname.user;
      navigate(`/user/${username}`);
    }
  }, [data]);

  const handleChange = (e) => {
    setNickname(e.target.value);
  };
  const disabled = useMemo(
    () => !nickname.includes("Dan") && !nickname.includes("Schneider"),
    [nickname]
  );

  return (
    <div>
      <h2>Create a new Nickname</h2>
      <form onSubmit={submit}>
        <Input name="nickname" value={nickname} handleChange={handleChange} />
        {disabled && <p>Must contain 'Dan' or 'Schneider'</p>}
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        <Button type="submit" disabled={disabled}>
          Submit
        </Button>
      </form>
    </div>
  );
}
