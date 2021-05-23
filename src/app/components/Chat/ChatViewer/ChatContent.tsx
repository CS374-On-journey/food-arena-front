import * as React from 'react';
import styled from 'styled-components/macro';
import { Avatar } from "baseui/avatar";

import { useHistory } from 'react-router-dom';
import { db } from 'app/pages/HomePage';
import { ChatContentItem } from './ChatContentItem';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 18px;
  width: 100%;
  height: calc(100vh - 150px);
  border-bottom: 1px solid #eaeaea;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 22px;
  overflow: auto;
  padding-bottom: 20px;

`;


export function ChatContent({
    selectedParty
}) {

  const [chatData, setChatData] = React.useState<Array<object>>([]);

  React.useEffect(()=>{
    setChatData([]);
    db.ref(`chats/${selectedParty.id}`).on("value", snapshot => {
        let chats : Array<object> = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val() as object);
        });
        setChatData(chats);
    });
  }, [selectedParty])


  return (
    <>
      <Box className="fadeInUp">
        { chatData.map((chat, idx) => {
            return (
              <ChatContentItem chat={chat} />
            )
          })
        }
      </Box>
    </>
  );
}
