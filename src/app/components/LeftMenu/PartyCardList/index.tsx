import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { IParty } from 'store/party/types';

import { usePartySlice } from 'store/party';
import { partySelector } from 'store/party/selectors';
import { searchSelector } from 'store/global/selectors';

import Card from './Card';
import PartyRegisteraion from 'app/components/Modals/PartyRegisteraion';

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    background: transparent;
`;

function score(party, search){
    var score = 0
    if(party.title.toLowerCase().includes(search.toLowerCase())){
        score += 100
    }
    for(var i=0;i<party.tags.length;i++){
        if(party.tags[i].toLowerCase().includes(search.toLowerCase())){
            score+=10
        }
    }
    if(party.description.toLowerCase().includes(search.toLowerCase())){
        score += 10
    }
    return score
}

export default function PartyCardList() {

    const { actions } = usePartySlice();
    var parties = useSelector(partySelector);
    const search = useSelector(searchSelector);

    if(search){
        parties = parties?.slice().sort((a:IParty, b:IParty): number => {
            return score(b, search) - score(a, search)
        });
    }
    const [isPartyRegisteraionOn, setIsPartyRegisteraionOn] = React.useState(false)
    const [selectedId, setSelectedId] = React.useState(null);

    const openModal = (id) => {
        setSelectedId(id);
        setIsPartyRegisteraionOn(true)
    }

    return (
        <Box>
            {
                parties?.map((item, idx, arr)=>{
                    return (
                        <Card key={idx} party={item} openModal={openModal}/>
                    )
                })
            }
            <PartyRegisteraion
                selectedId={selectedId}
                isPartyRegisteraionOn={isPartyRegisteraionOn}
                setIsPartyRegisteraionOn={setIsPartyRegisteraionOn}
            />
        </Box>
    );
}   