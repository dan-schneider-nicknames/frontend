import React from "react";
import { useParams } from "react-router";
import { GET_NICKNAMES } from "../../services/queries";

import NicknameList from "../common/Nickname/NicknameList";
import PageLinks from "../common/PageLinks";
import QueryCall from "../common/HigherOrder/QueryCall";

export default function NicknamesPage() {
  const { page } = useParams();
  const pageInt = parseInt(page) || 0;

  return (
    <div>
      <QueryCall 
        query={GET_NICKNAMES} 
        Component={NicknameList} 
        variables={{ page: pageInt }}
      />
      <PageLinks/>
    </div>
  );
}
