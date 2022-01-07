import React, { useRef } from "react";
import { GET_NICKNAMES } from "../../services/queries";
import useVisible from "../../hooks/useVisible";

import NicknameList from "../common/Nickname/NicknameList";
import QueryCall from "../common/HigherOrder/QueryCall";

export default function NicknamesPage(props) {
  const { page = 0 } = props

  return (
    <section>
      <QueryCall 
        query={GET_NICKNAMES} 
        Component={QueryCallback} 
        variables={{ page }}
      />
    </section>
  );
}

const QueryCallback = props => {
  const { nicknames } = props.data
  const { page } = props.variables 
  const lastNickname = nicknames[nicknames.length -1]
  const last = lastNickname.nickname === "Last Nickname"
  const endOfList = useRef()
  const isVisible = useVisible(endOfList, "50px")
  return (
    <>  
      <NicknameList nicknames={nicknames}/>
      <div ref={endOfList} />
      {isVisible && !last && (
        <NicknamesPage page={page + 1}/>
      )}
    </>
  )
}
