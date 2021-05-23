import * as React from 'react';
import styled from 'styled-components/macro';
import { Avatar } from "baseui/avatar";

import { useHistory } from 'react-router-dom';
import { db } from 'app/pages/HomePage';
import { getUser } from 'store/user/selectors';
import { useSelector } from 'react-redux';

interface IChatContentItem {
  isMe: boolean
}

const Box = styled.div<IChatContentItem>`
  display: flex;
  align-items: center;
  justify-content: right;
  flex-direction: ${props => props.isMe ? 'row-reverse' : 'row'};
  padding: 0 18px;
  width: 100%;
  height: 50px;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 26px;
  margin-top: 15px;

  & > .content {
    margin-left: ${props => props.isMe ? '0px' : '15px'};
    margin-right: ${props => props.isMe ? '15px' : '0'};
    text-align: ${props => props.isMe ? 'right' : 'left'};
  }
`;

export function ChatContentItem({
    chat
}) {

  const user = useSelector(getUser);
  
  return (
    <>
      <Box className="fadeInUp" isMe={chat.user_uid === user?.uid}>
        <Avatar
          name='food_photo'
          size="scale1200"
          src={chat.user_picture_name}
        />
        <div style={{display: 'flex', flexDirection: 'column'}} className='content'>
            <div><b>{chat.user_display_name}</b></div>
            <div>{chat.content}</div>
        </div>
      </Box>
    </>
  );
}
