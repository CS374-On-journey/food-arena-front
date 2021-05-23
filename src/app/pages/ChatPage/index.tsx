import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';

import { useSelector, useDispatch } from 'react-redux';
import { useUserSlice } from 'store/user';
import { isLogined, getUser } from 'store/user/selectors';

import {Block} from 'baseui/block';
import { Avatar } from "baseui/avatar";
import { ChatListItem } from 'app/components/Chat/ChatListItem';
import { ChatViewer } from 'app/components/Chat/ChatViewer';

const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 350px;
  user-select: none;
  z-index: 1;
  padding: 0 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.5rem;
  font-weight: 700;
  border-right: 1px solid #eaeaea;
`;

export function ChatPage() {

  const { actions } = useUserSlice();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <>
      <Helmet>
        <title>Chat</title>
        <meta name="description" content="Find THE FOOD!" />
      </Helmet>
      <div style={{display: 'flex'}}>
        <ChatList>
          <div style={{height: '75px', display: 'flex', alignItems: 'center'}}>
            <Avatar
              name={user?.displayName as string}
              size="scale1200"
              src={user?.photoURL}
            />
            <Block marginRight="scale500" />
            Chats
          </div>
          <ChatListItem
            photo_url='https://media.timeout.com/images/103504187/630/472/image.jpg'
            title='테스트'
            restaurant='adad'
            selected={true}
          />
          <ChatListItem 
            photo_url='https://media.timeout.com/images/103504187/630/472/image.jpg'
            title='테스트'
            restaurant='adad'
            selected={false}
          />
          <ChatListItem 
            photo_url='https://media.timeout.com/images/103504187/630/472/image.jpg'
            title='테스트'
            restaurant='adad'
            selected={false}
          />
          <ChatListItem 
            photo_url='https://media.timeout.com/images/103504187/630/472/image.jpg'
            title='테스트'
            restaurant='adad'
            selected={false}
          />
        </ChatList>
        <ChatViewer/>
      </div>
    </>
  );
}
