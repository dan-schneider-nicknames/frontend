import React from "react";
import { useParams } from "react-router";
import { GET_NICKNAMES } from "../../services/queries";
import options from "../../services/options";
import { useQuery } from "@apollo/client";
import Loader from "../common/Loader";
import Nickname from "../common/Nickname";
import { Link } from "react-router-dom";
import Button from "../common/Button"

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
      {data.nicknames.map((nickname) => (
        <Nickname {...nickname} key={nickname.nickname_id} />
      ))}
      <div>
        {pageInt > 0 && <Link to={`/page/${pageInt - 1}`}>
          <Button> Prev Page </Button>
        </Link>}
        <Link to={`/page/${pageInt + 1}`}>
          <Button> Next Page </Button>
        </Link>
      </div>
    </div>
  );
}
