import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { setCardList } from 'app/components/LeftMenu/Tab';
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
    const { search } = setCardList();
    const places = useSelector(placeSelector);
    var before = "";
    var after = "";

    places?.map((item, idx, arr)=>{
        if(item.name.includes(search) || item.tags[0].includes(search) || item.tags[1].includes(search)){
            before += <Card key={idx} restaurant={item}/>
        }
        else{
            after += <Card key={idx} restaurant={item}/>
        }
    })

    return (
        <Box>
            {
               before+after
            }
        </Box>
    );
}   