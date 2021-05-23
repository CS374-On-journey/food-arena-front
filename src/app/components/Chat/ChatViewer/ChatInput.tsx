import * as React from 'react';
import styled from 'styled-components/macro';
import { Avatar } from "baseui/avatar";

import {Block} from 'baseui/block';
import { useHistory } from 'react-router-dom';
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { db } from 'app/pages/HomePage';
import { useSelector } from 'react-redux';
import { getUser } from 'store/user/selectors';


const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #eaeaea;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 22px;
`;

export function ChatInput({
    selectedParty
}) {

  const [content, setContent] = React.useState("");
  const user = useSelector(getUser);
  const inputRef = React.useRef(null);

  const sendChat = async () => {
    await db.ref(`chats/${selectedParty.id}`).push({
      content: content,
      timestamp: Date.now(),
      user_uid: user?.uid,
      user_display_name: user?.displayName,
      user_picture_name: user?.photoURL,
      party_id: selectedParty.id
    });
  }

  return (
    <>
      <Box className="fadeInUp">
          <div style={{display: 'flex', width: '100%'}}>
            <Input
              inputRef={inputRef}
              value={content}
              onChange={e => setContent(e.currentTarget.value)}
              placeholder="Type here.."
              clearOnEscape
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
                e.preventDefault();
                sendChat();
                setContent('');
              }}
            />
            <Block marginRight="scale500" />
            <Button
              onClick={() => {
                sendChat()
                setContent('')
              }}
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    width: '100px'
                  })
                }
              }}
            >Send</Button>
          </div>
      </Box>
    </>
  );
}
