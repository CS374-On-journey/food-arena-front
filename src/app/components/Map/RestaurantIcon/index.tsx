import * as React from 'react';
import { IPlace } from 'store/place/types';
import styled from 'styled-components/macro';

import { placeAction, usePlaceSlice } from 'store/place/index';
import { useDispatch } from 'react-redux';

interface BoxPropsType {
    image_url:string,
    size:number,
}

const Box = styled.div<BoxPropsType>`
    cursor: pointer;
    position: relative;
    top:${p=>`-${p.size/2.0}px`};
    left:${p=>`-${p.size/2.0}px`};
    width:${p=>`${p.size}px`};
    height:${p=>`${p.size}px`};
    background-image:url(${p=>p.image_url});
    background-size:cover;
    border-radius: 1000px;
    box-shadow: 0 0 5px #0005;
    transition-property: top, left, width, height;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(1.0, 0.0, 0.0, 1.0);
    &:hover{
        top:${p=>`-${p.size/2.0*1.33}px`};
        left:${p=>`-${p.size/2.0*1.33}px`};
        width:${p=>`${p.size*1.33}px`};
        height:${p=>`${p.size*1.33}px`};
    }
`

interface BlurPropsType{
    size:number;
}

const Blur = styled.div<BlurPropsType>`
    backdrop-filter: ${p=>p.size > 0 ? `blur(${p.size}px)`:'none'};
    width:100%;
    height:100%;
    border-radius:1000px;
`

interface PropsType {
    restaurant: IPlace,
    viewport: any,
}

export default function RestaurantIcon(props:PropsType) {
    const {restaurant} = props
    const { zoom } = props.viewport

    const dispatch = useDispatch();
    const {actions} = usePlaceSlice();

    let size = 80;
    let bsize = 0;

    if(zoom < 6){
        size = 8;
        bsize = 3;
    }else if(zoom < 9){
        size = 15;
        bsize = 2;
    }else if(zoom < 10.25){
        size = 24;
        bsize = 1;
    }else if (zoom < 11.5){
        size=32;
        bsize=0.25;
    }else if (zoom < 12.5){
        size=55;
        bsize=0;
    }else if (zoom < 13.5){
        size=64;
        bsize=0;
    }
    
    return (
        <Box 
            size={size} image_url={restaurant.picture_urls[0]}
            onClick={()=>{
                if(restaurant.submenu_selected){
                    dispatch(placeAction.closeRestaurant(restaurant.id))
                }else{
                    dispatch(placeAction.openRestaurant(restaurant.id))
                    dispatch(placeAction.focusRestaurant(restaurant.id))
                }
            }}
        >
            <Blur size={bsize}/>
        </Box>
    )
}