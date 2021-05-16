import * as React from 'react';
import styled from 'styled-components/macro';
import Card from './Card';

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    background: transparent;
`;

export default function PlaceCardList() {

    return (
        <>
            <Box>
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
        </>
    );
}   