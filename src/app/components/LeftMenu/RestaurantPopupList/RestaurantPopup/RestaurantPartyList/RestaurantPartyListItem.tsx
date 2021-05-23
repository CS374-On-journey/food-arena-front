import * as React from 'react';
import { IParty } from 'store/party/types';
import styled from 'styled-components/macro';

import PartyCreation from 'app/components/Modals/PartyCreation';
import PartyRegisteraion from 'app/components/Modals/PartyRegisteraion';
import PeopleIcon from './PeopleIcon';

const Box = styled.div`
    display: flex;
    width: 100%;
    height: 77px;
    background: white;
    margin-top: 10px;
    margin-bottom: 10px;
`

const ContentBox = styled.div`
    width: calc(100% - 77px - 20px);
    height: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
`

const PeopleBox = styled.div`
    display: flex;
`

const DetailButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 77px;
    height: 77px;
    color: white;
    transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    background: #FF3061;
    &:hover{
        background-color: #ff164c;
    }
    &:active{
        background-color: #ff517a;
    }
`

interface PropsType {
    party: IParty;
    onClose: any;
}

export default function RestaurantPartyListItem(props : PropsType) {
    const { party, onClose } = props;

    const [isPartyRegisteraionOn, setIsPartyRegisteraionOn] = React.useState(false);

    let range = new Array<number>();
    for(let i = 0; i < party.max_people; i++) range.push(i);

    return (
        <Box>
            <ContentBox>
                <Title>{party.title}</Title>
                <PeopleBox>
                    {
                        range.map((i, idx, arr)=>{
                            if(i<party.registered_people){
                                return (<PeopleIcon fill={true}/>)
                            }
                            return (<PeopleIcon fill={false}/>)
                        })
                    }
                </PeopleBox>
            </ContentBox>
            <DetailButton onClick={()=>setIsPartyRegisteraionOn(true)}>
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#FAFAFA"/>
                </svg>
            </DetailButton>
            <PartyRegisteraion
                selectedId={party?.id}
                isPartyRegisteraionOn={isPartyRegisteraionOn}
                setIsPartyRegisteraionOn={x=>{setIsPartyRegisteraionOn(x); onClose()}}
            />
        </Box>
    )
}