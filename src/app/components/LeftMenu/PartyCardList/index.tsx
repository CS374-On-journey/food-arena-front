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

function process_string(s){
    var s_new = ""
    for(var i=0;i<s.length;i++){
        if(s[i]!=' '){
            s_new+=s[i]
        }
    }
    return s_new.toLowerCase()
}

function score(party, search){
    var score = 0
    if(process_string(party.title).includes(process_string(search))){
        score += 100
    }
    for(var i=0;i<party.tags.length;i++){
        if(process_string(party.tags[i]).includes(process_string(search))){
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