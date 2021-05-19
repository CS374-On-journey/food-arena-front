import * as React from 'react';
import styled from 'styled-components/macro';
import Card from './Card';

import { useSelector } from 'react-redux';
import { usePlaceSlice } from 'store/place';
import { placeSelector } from 'store/place/selectors';

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    background: transparent;
`;

export default function PlaceCardList() {

    const { actions } = usePlaceSlice();
    const places = useSelector(placeSelector);

    console.log(places);
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