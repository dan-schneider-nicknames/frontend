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
        Component={queryCallback} 
        variables={{ page: pageInt }}
      />
    </div>
  );
}

const queryCallback = props => {
  const { nicknames } = props.data
  const lastNickname = nicknames[nicknames.length -1]
  const last = lastNickname.nickname === "Last Nickname"
  return (
    <>  
      <NicknameList nicknames={nicknames}/>
      <PageLinks lastPage={last}/>
    </>
  )
}
