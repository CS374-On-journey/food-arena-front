import * as React from 'react';
import styled from 'styled-components/macro';

import RestaurantPopup from './RestaurantPopup'

const Box = styled.div`
    
`

export default function RestaurantPopupList() {
    return (
        <Box>
            <RestaurantPopup/>
            <RestaurantPopup/>
            <RestaurantPopup/>
            <RestaurantPopup/>
        </Box>
    );
}