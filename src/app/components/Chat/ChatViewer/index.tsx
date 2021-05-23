import * as React from 'react';
import styled from 'styled-components/macro';
import { ChatInfo } from './ChatInfo';

import { useSelector } from 'react-redux';
import { selectRestaurantById } from 'store/place/selectors';
import { IPlace } from 'store/place/types';
import { ChatContent } from './ChatContent';
import { ChatInput } from './ChatInput';

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

export function ChatViewer({
  selectedParty
}) {

  const restaurant = useSelector(selectRestaurantById(selectedParty === undefined ? null : selectedParty.restaurant_id)) as IPlace;

  return (
    <>
      <Box>
        {selectedParty === undefined || restaurant === undefined ? (
          <ChatInfo 
            photo_url=''
            title='Select your party'
            restaurant=''
          />
        ) : (
          <>
            <ChatInfo 
              photo_url={restaurant.picture_urls[0]}
              title={selectedParty.title}
              restaurant={restaurant.name}
            />
            <ChatContent selectedParty={selectedParty} />
            <ChatInput selectedParty={selectedParty} />
          </>
        )}
        
      </Box>
    </>
  );
}
