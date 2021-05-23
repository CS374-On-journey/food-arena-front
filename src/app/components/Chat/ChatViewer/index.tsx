import * as React from 'react';
import styled from 'styled-components/macro';
import { ChatInfo } from './ChatInfo';

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export function ChatViewer({

}) {

  return (
    <>
      <Box>
        <ChatInfo 
          photo_url='https://media.timeout.com/images/103504187/630/472/image.jpg'
          title='테스트'
          restaurant='adad'
        />
      </Box>
    </>
  );
}
