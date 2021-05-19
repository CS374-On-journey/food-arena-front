import * as React from 'react';
import styled from 'styled-components/macro';

const Box = styled.div`
    color: #CF00F1;
    font-size: 12px;
    font-weight: 600;
    flex: display;
    align-content: center;

    & > svg {
        margin-right: 5px;
    }
`;

export default function AiPickIndicator(props) {
    return (
        <>
        <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                <path d="M17 0.215686L13.2222 11H8.68889H8.31111H3.77778L0 0.215686L5.7375 5.17647L8.5 0L11.2625 5.17647L17 0.215686Z" fill="#CF00F1"/>
            </svg>
            AI Pick!
        </Box>
        </>
    )
}