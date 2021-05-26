import * as React from 'react';
import styled from 'styled-components/macro';

import {Block} from 'baseui/block';
import { Avatar } from "baseui/avatar";
import { useSelector } from 'react-redux';
import { selectRestaurantById } from 'store/place/selectors';
import { IPlace } from 'store/place/types';

interface IChatListItem {
    selected: boolean
}

const Box = styled.div<IChatListItem>`
  cursor: pointer;
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
    title,
    restaurant_id,
    selected,
    onClick
}) {

  const restaurant = useSelector(selectRestaurantById(restaurant_id)) as IPlace;

  return (
    <>
      <Box selected={selected} onClick={onClick}>
        <Avatar
          name='food_photo'
          size="scale1400"
          src={restaurant.picture_urls[0]}
        />
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>
          <div><b>{title}</b></div>
          <div>{restaurant.name}</div>
        </div>
      </Box>
    </>
  );
}
