import React from "react";
import { useParams } from "react-router";
import { GET_NICKNAMES } from "../../services/queries";
import options from "../../services/options";
import { useQuery } from "@apollo/client";
import Loader from "../common/Loader";
import Nickname from "../common/Nickname";
import PageLinks from "../common/PageLinks";

export default function Nicknames() {
  const { page } = useParams();
  const pageInt = parseInt(page) || 0;
  const { data, loading, error } = useQuery(GET_NICKNAMES, {
    ...options,
    variables: { page: pageInt },
  });

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <ul>
        {data.nicknames.map((nickname) => (
            <Nickname {...nickname} key={nickname.nickname_id} />
        ))}
      </ul>
      <PageLinks/>
    </div>
  );
}
