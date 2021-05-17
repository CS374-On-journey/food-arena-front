import * as React from 'react';
import styled from 'styled-components/macro';

import Tab from './Tab';
import PlaceCardList from './PlaceCardList';
import RestaurantPopupList from './RestaurantPopupList';

const Box = styled.div`
    background: transparent;
    position: fixed;
    width: 20vw;
    height: 100vh;
    min-width: 450px;
    padding: 25px;
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
             <RestaurantPopupList/>
        </Box>
        </>
    );
}   