import { PayloadAction } from '@reduxjs/toolkit';
import { buffers } from 'redux-saga';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅

import { useInjectReducer } from 'utils/redux-injectors';

import { IParty, PartiesState } from './types';

function choice<T>(arr:Array<T>){
    return arr[Math.min(arr.length-1, Math.round(Math.random()*arr.length))]
}

function random_title() {
    return choice([
        'With Korean friends', "Friday Chicken🍗", "Only French Fries🍟"])
}

function random_restaurant() {
    return choice([
        'BHC', "Wolfgang's Steakhouse", "Donkey Chicken", "BBQ", "Outback", "GS25", "Seven Eleven", 
        "Hanaro Mart", "Hi Mart", "Samyukga", "Lotteria", "Burgerking", "Mcdonalds", "KFC", "Outdack", "Yellow Chicken", "Moms Touch"
    ])
}

function random_location() {
    return {
        longitude: Math.random()*0.1-74.0,
        latitude: Math.random()*0.08+40.7,
        readable: '4 Park Ave, New York'
    }
}

let generated_parties = new Array()
for(let i=0; i<10; i++)
{
    generated_parties.push(
        {
            id: i+1,
            title: random_title(),
            restaurant: random_restaurant(),
            address: random_location(),
            meeting_date: '2021. 05. 07 19:00 ~',
            due_date: '~ 2021. 05. 11 19:00',
            tags: ['steak', 'luxery'],
            description: '설명',
            registered_people: 4,
            max_people: 4,
            ban_rules: [
                '금지사항1',
                '금지사항2',
                '금지사항3',
            ]
        }
    )
}
    
export const initialState: PartiesState = {
    parties: generated_parties
};

const slice = createSlice({
    name: 'party',
    initialState,
    reducers: 
    {
    },
});

/**
* `actions` will be used to trigger change in the state from where ever you want
*/
export const { actions: partyAction } = slice;

export const usePartySlice = () => {
    useInjectReducer({ key: slice.name, reducer: slice.reducer });
    return { actions: slice.actions };
};