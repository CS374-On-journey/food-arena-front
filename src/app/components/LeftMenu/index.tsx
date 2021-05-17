import * as React from 'react';
import styled from 'styled-components/macro';

import Tab from './Tab';
import PlaceCardList from './PlaceCardList';
import RestaurantPopupList from './RestaurantPopupList';

const Box = styled.div`
    background: transparent;
    position: fixed;
    width: 450px;
    height: 100vh;
    min-width: 450px;
    padding: 25px;
    padding-right: 75px;
    overflow: scroll;
    z-index: 10000000;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

const PopupBox = styled.div`
    background: transparent;
    position: fixed;
    margin-left: 325px;
    height: 100vh;
    min-width: 450px;
    padding: 25px;
    padding-top: 155px;
    padding-left: 75px;
    padding-right: 75px;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

export default function LeftMenu() {

    return (
        <>
        <Box>
             <Tab/>
             <PlaceCardList/>
        </Box>
        <PopupBox>
            <RestaurantPopupList/>
        </PopupBox>
        </>
    );
}   