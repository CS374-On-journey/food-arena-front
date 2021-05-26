import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { placeSelector } from 'store/place/selectors';

import Card from './Card';
import { searchSelector } from 'store/global/selectors';
import { IPlace } from 'store/place/types';

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    background: transparent;
`;

function process_string(s){
    var s_new = ""
    for(var i=0;i<s.length;i++){
        if(s[i]!=' '){
            s_new+=s[i]
        }
    }
    return s_new.toLowerCase()
}

function score(place, search){
    var score = 0
    if(place.name.toLowerCase().includes(search.toLowerCase())){
        score += 100
    }
    for(var i=0;i<place.tags.length;i++){
        if(place.tags[i].toLowerCase().includes(search.toLowerCase())){
            score+=10
        }
    }
    for(var i=0;i<place.menus.length;i++){
        if(place.menus[i].title.toLowerCase().includes(search.toLowerCase())){
            score+=10
        }
    }
    return score
}
export default function PlaceCardList() {
    const { actions } = usePlaceSlice();
    var places = useSelector(placeSelector);
    const search = useSelector(searchSelector);
    return (
        <Box>
            {
                places?.map((item, idx, arr)=>{
                    return (
                        <Card key={idx} restaurant={item}/>
                    )
                })
            }
        </Box>
    );
}   