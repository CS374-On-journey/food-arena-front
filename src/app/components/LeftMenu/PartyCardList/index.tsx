import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import { usePartySlice } from 'store/party';
import { partySelector } from 'store/party/selectors';

import Card from './Card';
import PartyRegisteraion from 'app/components/Modals/PartyRegisteraion';

const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    background: transparent;
`;

export default function PartyCardList() {

    const { actions } = usePartySlice();
    const parties = useSelector(partySelector);

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
                    if(item.visible){
                            return (
                            <Card key={idx} party={item} openModal={openModal}/>
                        )
                    }else{
                        return
                    }
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