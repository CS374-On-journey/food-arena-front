import * as React from 'react';
import styled from 'styled-components/macro';

import {Block} from 'baseui/block';
import { Avatar } from "baseui/avatar";

interface IChatListItem {
    selected: boolean
}

const Box = styled.div<IChatListItem>`
  display: flex;
  align-items: center;
  height: 75px;
  margin: 5px 0;
  padding: 10px;
  width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 24px;
  background-color: ${props => props.selected ? '#F6F6F6' : '#fff'};
  border-radius: 18px;
`;

export function ChatListItem({
    photo_url,
    title,
    restaurant,
    selected
}) {

  return (
    <>
      <Box selected={selected}>
        <Avatar
          name='food_photo'
          size="scale1400"
          src={photo_url}
        />
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>
          <div><b>{title}</b></div>
          <div>{restaurant}</div>
        </div>
      </Box>
    </>
  );
}
