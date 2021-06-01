import * as React from 'react';
import { IPlace } from 'store/place/types';
import styled from 'styled-components/macro';

import { usePlaceSlice } from 'store/place/index';
import { useMapSlice } from 'store/map/index';

import { useDispatch } from 'react-redux';
import { IParty } from 'store/party/types';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PartyRegisteraion from '../../Modals/PartyRegisteraion';
import { useGlobalSlice } from 'store/global';

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
    party: IParty,
    restaurant: IPlace,
    viewport: any,
}

export default function RestaurantIcon(props:PropsType) {
    const { party } = props
    const { restaurant } = props
    const { zoom } = props.viewport

    const dispatch = useDispatch();
    const {actions} = useMapSlice();
    const {actions:globalActions} = useGlobalSlice();

    let size = 80;
    let bsize = 0;
    let zmul = 2;

    if(zoom < 6 + zmul){
        size = 8;
        bsize = 3;
    }else if(zoom < 9 + zmul){
        size = 15;
        bsize = 2;
    }else if(zoom < 10.25 + zmul){
        size = 24;
        bsize = 1;
    }else if (zoom < 11.5 + zmul){
        size=32;
        bsize=0.25;
    }else if (zoom < 12.5 + zmul){
        size=55;
        bsize=0;
    }else if (zoom < 13.5 + zmul){
        size=64;
        bsize=0;
    }
    
    return (
        <Box 
            size={size} image_url={restaurant.picture_urls[0]}
            onClick={()=>{
                dispatch(actions.setCenter({longitude:restaurant.address.longitude, latitude:restaurant.address.latitude}))
                dispatch(globalActions.setPartyRegisterationTargetId(party.id))
                dispatch(globalActions.setPartyRegisterationOn(true))
            }}
        >
            { size > 50 ? 
                <CircularProgressbar 
                    value={party.registered_people / party.max_people * 100}
                    styles={buildStyles({
                        strokeLinecap:'butt',
                        trailColor: 'white',
                        pathTransition: 'none',
                        pathColor: ['#FE3061', '#AFE32D', '#F4A71B'][party.id%3],
                    })}
                /> 
            : null}
            <Blur size={bsize}/>
        </Box>
    )
}