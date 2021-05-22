import * as React from 'react';
import styled from 'styled-components/macro';

import { useSelector, useDispatch } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { placeSelector } from 'store/place/selectors';
import { IPlace } from 'store/place/types'

import RestaurantPopup from './RestaurantPopup'

const Box = styled.div`
    width: 100%;
    height: 100%;
`

export default function RestaurantPopupList(props) {
    //redux
    const dispatch = useDispatch()
    const { actions } = usePlaceSlice();
    const { closeRestaurant, openRestaurant, focusRestaurant } = actions;

    const places = useSelector(placeSelector) as IPlace[];

    //filter
    let opened_restaurants = new Array<IPlace>();
    let selected_idx = 0;
    for(let i=0; i < places.length; i++){
        let item = places[i];
        if(item.submenu_opened){
            if(item.submenu_selected){
                selected_idx = opened_restaurants.length
            }
            opened_restaurants.push(item);
        }
    }
    
    return (
        <Box>
        {
            opened_restaurants.map((item, idx)=>
            {
                return (
                <RestaurantPopup 
                    key={idx}
                    restaurant={item} 
                    selected={idx===selected_idx} 
                    bottom_header={idx > selected_idx}
                    z_index={-Math.abs(idx-selected_idx)}
                    onSelect={()=>{
                        dispatch(focusRestaurant(item.id));
                    }}
                    onClose = {() => {
                        dispatch(closeRestaurant(item.id));
                    }}
                />
                )
            })
        }
        </Box>
    );
}