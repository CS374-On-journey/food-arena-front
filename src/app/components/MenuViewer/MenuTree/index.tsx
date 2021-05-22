import * as React from 'react';
import styled from 'styled-components/macro';

const Box = styled.div`
    width:100%;
    height:100%;
`

export default function MenuTree(props) {
    const restaurant = props.restaurant;
    if(restaurant){
        return (
            <Box>
                
            </Box>
        )
    }else{
        return (
            <Box>
                Select Restaurant
            </Box>
        )
    }
}