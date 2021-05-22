import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import { usePartySlice } from 'store/party';
import { partySelector } from 'store/party/selectors';

import Card from './Card';

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    background: transparent;
`;

export default function PlaceCardList() {

    const { actions } = usePartySlice();
    const parties = useSelector(partySelector);

    return (
        <Box>
            {
                parties?.map((item, idx, arr)=>{
                    return (
                        <Card key={idx} party={item}/>
                    )
                })
            }
        </Box>
    );
}   