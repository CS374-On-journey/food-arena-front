import * as React from 'react';
import styled from 'styled-components/macro';
import { Avatar } from "baseui/avatar";

import { useHistory } from 'react-router-dom';
import CloseButton from 'app/components/CloseButton';

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

export function ChatInfo({
    photo_url,
    title,
    restaurant
}) {

  let history = useHistory();

  return (
    <>
      <Box className="fadeInUp">
        <div style={{display: 'flex'}}>
            <Avatar
              name='food_photo'
              size="scale1200"
              src={photo_url}
            />
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>
              <div><b>{title}</b></div>
              <div>{restaurant}</div>
            </div>
        </div>
        <CloseButton onClick={() => history.push('/')}/>
      </Box>
    </>
  );
}
