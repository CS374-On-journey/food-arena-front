import { PayloadAction } from '@reduxjs/toolkit';
import { buffers } from 'redux-saga';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅

import { useInjectReducer } from 'utils/redux-injectors';

import { IParty, PartiesState } from './types';

import { managed_ids } from '../place/index';

function choice<T>(arr:Array<T>){
    return arr[Math.min(arr.length-1, Math.round(Math.random()*arr.length))]
}

function random_title() {
    return choice([
        'With Korean friends', "Friday Chicken🍗", "Only French Fries🍟", "Coding Hell Party", "Full night Coding", "Caffe Coding", "Dooby Help Me"])
}

let generated_parties = new Array()
for(let i=0; i<100; i++)
{
    let maxPeople = Math.round(Math.random()*5) + 2;
    generated_parties.push(
        {
            id: i+1,
            title: random_title(),
            restaurant_id: choice(managed_ids),

            meeting_date: '2021. 05. 07 19:00 ~',
            due_date: '~ 2021. 05. 11 19:00',
            tags: ['steak', 'luxery'],
            description: '설명',
            menu_text: '밥',
            registered_people: Math.min(Math.round(Math.random()*maxPeople), maxPeople),
            max_people: maxPeople,
            ban_rules: [
                '금지사항 1: No Smoking',
                '금지사항 2: No Alchole',
                '금지사항 3: No Vegetarian. We will eat meats :3',
            ],
        }
    )
}

console.log('created parites', generated_parties)
    
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