import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { placeSelector } from 'store/place/selectors';

import Card from './Card';

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

    return (
        <Box>
            {/* {
                places?.map((item, idx, arr)=>{
                    return (
                        <Card key={idx} restaurant={item}/>
                    )
                })
            } */}
        </Box>
    );
}   