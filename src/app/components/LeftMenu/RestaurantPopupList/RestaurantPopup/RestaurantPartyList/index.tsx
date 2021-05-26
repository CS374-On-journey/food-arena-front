import * as React from 'react';
import styled from 'styled-components/macro';

import {useSelector} from 'react-redux';
import {selectPartiesByRestaurantId} from 'store/party/selectors';

import RestaurantPartyListItem from './RestaurantPartyListItem';
import { IPlace } from 'store/place/types';
import PartyCreation from 'app/components/Modals/PartyCreation';

const Box = styled.div`
    width: 300px;
    height: 400px;
    background: white;
    border-radius: 20px;
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.33);
`

const HeaderBox = styled.div`
    width: 100%;
    height: 65px;
`

const HeaderTitleBox = styled.div`
    display: flex;
    height: 64px;
    align-items: center;
`

const HeaderTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
`

const TitleBackButton = styled.button`
    cursor: pointer;
    margin-left: 20px;
    width: 36px;
    height: 36px;
    background: url('./icon-expand.svg');
    background-size: 24px 24px;
    background-position: center;
    border: none;
    border-radius: 1000px;
    transition: background 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
        background-color: #00000014;
    }
    &:active {
        background-color: #0000003b;
    }
`

const HeaderSeperator = styled.div`
    width: calc(100% - 40px);
    margin-left: 20px;
    background: #c4c4c4;
    height:1px;
`

const ListBox = styled.div`
    width: 100%;
    margin-top: 10px;
    height: 270px;
    overflow-y: auto;
    background: #d9d9d9;
`

const ListEmptyText = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: white;
`

const MakeNewButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 55px;
    background: #f1f1f1;
    border: none;
    border-radius: 0 0 20px 20px;
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 400;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
        background-color: #00000014;
    }
    &:active {
        background-color: #ffffff1d;
    }
`

interface PropsType{
    restaurant: IPlace;
    onClose: any;
}

export default function RestaurantPartyList(props:PropsType) {
    const { restaurant, onClose } = props;

    const parties = useSelector(selectPartiesByRestaurantId(restaurant?.id))
    const [isPartyCreationOn, setIsPartyCreationOn] = React.useState(false);

    return (
        <Box>
            <HeaderBox>
                <HeaderTitleBox>
                    <TitleBackButton onClick={onClose}/>
                    <HeaderTitle>Food Parties</HeaderTitle>
                </HeaderTitleBox>
                <HeaderSeperator/>
            </HeaderBox>
            <ListBox>
                {
                parties && parties.length > 0 ?
                parties.map((item, idx, arr) => {
                    return (<RestaurantPartyListItem party={item} onClose={onClose}/>)
                })
                :<ListEmptyText>Please Create New Party!</ListEmptyText>}
            </ListBox>
            <MakeNewButton onClick={()=>setIsPartyCreationOn(true)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:'5px'}}>
                <path d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#A0A0A0"/>
                </svg>
                Make New Party
            </MakeNewButton>

            <PartyCreation
                restaurantId={restaurant.id}
                isPartyCreationOn={isPartyCreationOn}
                setIsPartyCreationOn={(x)=>{setIsPartyCreationOn(false); onClose()}}
            />
        </Box>
    )
}