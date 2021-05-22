import { PayloadAction } from '@reduxjs/toolkit';
import { buffers } from 'redux-saga';
import { isTemplateExpression } from 'typescript';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅

import { useInjectReducer } from 'utils/redux-injectors';
import places from "./restaurants.json";
import { IPlace, IMenu, PlacesState } from './types';

let generated_places = new Array()
for(let i=0; i<4; i++)
{
    generated_places.push(
        {
            id: i+1,
            name: (<any>places).places.restaurants[i].name,
            address: {
                longitude: (<any>places).places.restaurants[i].address.longitude,
                latitude: (<any>places).places.restaurants[i].address.latitude,
                readable: (<any>places).places.address
            },
            distance: Math.round(Math.random()*500+500), // meter
            travel_time: Math.round(Math.random()*60+5), // minute
            waiting_time: (<any>places).places.restaurants[i].waiting_time, // minute
            open_time: '09:00',
            close_time: '22:00',
            local_time: `${Math.round(Math.random()*23)+1}:00`,
            tags: (<any>places).places.restaurants[i].tags,
            rating: (<any>places).places.restaurants[i].rating,
            ai_pick: Math.random() > 0.5,
            ai_score: (<any>places).places.restaurants[i].ai_score,
            picture_urls: (<any>places).places.restaurants[i].picture_urls,
            reviews: [
                {
                    author: (<any>places).places.restaurants[i].reviews[0].author,
                    content: (<any>places).places.restaurants[i].reviews[0].content,
                    rating: (<any>places).places.restaurants[i].reviews[0].rating,
                    attachment_urls: []
                },
                {
                    author: (<any>places).places.restaurants[i].reviews[1].author,
                    content: (<any>places).places.restaurants[i].reviews[1].content,
                    rating: (<any>places).places.restaurants[i].reviews[1].rating,
                    attachment_urls: []
                }
            ],
            menus: (<any>places).places.restaurants[i].reviews[1].menus,
            submenu_opened: false,
            submenu_selected: false,
        }
    )
}
    
export const initialState: PlacesState = {
    places: generated_places,
    menu_viewer_opened: false,
};

interface UpdateMenuPayloadType {
    id: number,
    data: IMenu[],
}

const slice = createSlice({
    name: 'place',
    initialState,
    reducers: 
    {
        closeRestaurant(state: PlacesState, action: PayloadAction<number>) 
        {
            const id = action.payload;
            //console.log('close restaurant', id);

            let closed_idx = -1;
            for(let i =0; i<state.places.length; i++)
            {
                let item = state.places[i];
                if( item.id == id ){
                    if(item.submenu_opened && item.submenu_selected){
                        closed_idx = i;
                    }
                    item.submenu_opened = false;
                    item.submenu_selected = false;
                }
                else if(item.submenu_opened && closed_idx >= 0){
                    item.submenu_selected = true;
                    closed_idx = -1;
                }
            }

            if(closed_idx >= 0){
                let last_opened : IPlace | null = null;
                for(let i=0; i<closed_idx; i++){
                    let item = state.places[i]
                    if(item.submenu_opened) last_opened = item;
                }
                if(last_opened){
                    (last_opened as IPlace).submenu_selected = true;
                }
            }

            return state;
        },

        openRestaurant(state: PlacesState, action: PayloadAction<number>) 
        {
            const id = action.payload;
            //console.log('open restaurant', id);
            for(let i =0; i<state.places.length; i++){
                let item = state.places[i];
                if( item.id == id ){
                    item.submenu_opened = true;
                    item.submenu_selected = true;
                }else if( item.submenu_selected ){
                    item.submenu_selected = false;
                }
            }
            return state;
        },

        focusRestaurant(state: PlacesState, action: PayloadAction<number>) 
        {
            const id = action.payload;
            //console.log('focus restaurant', id);
            let focused = false;
            for(let i = 0; i<state.places.length; i++)
            {
                let item = state.places[i];
                if( item.id == id && item.submenu_opened){
                    item.submenu_selected = true;
                    focused = true;
                }
            }
            for(let i = 0; focused && i < state.places.length; i++)
            {
                let item = state.places[i];
                if( item.id !== id ) item.submenu_selected = false;
            }
            return state;
        },

        updateMenu(state: PlacesState, action: PayloadAction<UpdateMenuPayloadType>)
        {
            const payload = action.payload as UpdateMenuPayloadType;
            for(let i=0; i<state.places.length; i++)
            {
                let item = state.places[i];
                if(item.id == payload.id){
                    item.menus = payload.data;
                    break;
                }
            }
            return state;
        },

        openMenu(state: PlacesState)
        {
            state.menu_viewer_opened = true;
            return state;
        },

        closeMenu(state: PlacesState)
        {
            state.menu_viewer_opened = false;
            return state;
        },

        toggleMenu(state: PlacesState)
        {
            state.menu_viewer_opened = !state.menu_viewer_opened;
            return state;
        }
    },
});

/**
* `actions` will be used to trigger change in the state from where ever you want
*/
export const { actions: placeAction } = slice;

export const usePlaceSlice = () => {
    useInjectReducer({ key: slice.name, reducer: slice.reducer });
    return { actions: slice.actions };
};