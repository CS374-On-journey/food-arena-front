import * as React from 'react';
import styled from 'styled-components/macro';

import Tab from './Tab';
import PlaceCardList from './PlaceCardList';
import PartyCardList from './PartyCardList';
import RestaurantPopupList from './RestaurantPopupList';

import { useSelector } from 'react-redux';
import { useGlobalSlice } from 'store/global';
import { tabSelector } from 'store/global/selectors';

const Box = styled.div`
    background: transparent;
    position: fixed;
    padding-top: 25px;
    margin-left: 25px;
    width: 350px;
    height: 100vh;
    overflow: scroll;
    z-index: 10000000;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

const PopupBox = styled.div`
    background: transparent;
    position: fixed;
    margin-left: 400px;
    height: 100vh;
    padding-top: 155px;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

export default function LeftMenu() {

    const currentTab = useSelector(tabSelector);

    return (
        <>
        <Box>
             <Tab/>
             {
                currentTab === 'place' ? 
                (
                    <PlaceCardList/>
                ) : currentTab === 'party' ?
                (
                    <PartyCardList/>
                ) : null
            }
        </Box>
        { currentTab === 'place' ? (
            <PopupBox>
                <RestaurantPopupList/>
            </PopupBox>
        ) : null}        
        </>
    );
}   