import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅

import { useInjectReducer } from 'utils/redux-injectors';

import { IParty, PartiesState } from './types';
import { parties_data, nums } from './party_data'
import { managed_ids } from '../place/index';
import { searchItems } from 'store/search';

function choice<T>(arr:Array<T>){
    return arr[Math.min(arr.length-1, Math.round(Math.random()*arr.length))]
}

function random_title() {
    return choice([
        'With Korean friends', "Friday Chicken🍗", "Only French Fries🍟", "Coding Hell Party", "Full night Coding", "Caffe Coding", "Dooby Help Me"])
}

let generated_parties = new Array<IParty>()
for(let i=0; i<nums; i++)
{
    let maxPeople = parties_data[i].maxpeople
    generated_parties.push(
        {
            id: i+1,
            title: parties_data[i].title,
            restaurant_id: parties_data[i].res_id,
            is_registered: false,

            meeting_date: '2021. 05. 07 19:00 ~',
            due_date: '~ 2021. 05. 11 19:00',
            tags: parties_data[i].tags,
            description: parties_data[i].description,
            menu_text: parties_data[i].menu,
            registered_people: Math.min(Math.floor(Math.random()*(maxPeople-1)), maxPeople-1) + 1,
            max_people: maxPeople,
            ban_rules: [
                '금지사항 1: No Smoking',
                '금지사항 2: No Alchole',
                '금지사항 3: No Vegetarian. We will eat meats :3',
            ],
            visible:true,
            search_score:0,
        }
    )
}

export const initialState: PartiesState = {
    search_term: '',
    parties: generated_parties
};

const slice = createSlice({
    name: 'party',
    initialState,
    reducers: 
    {
        setSearch(s:PartiesState, a:PayloadAction<string>){
            s.search_term = a.payload;
            searchItems(s.parties, a.payload);
        },

        createParty(s:PartiesState, a:PayloadAction<IParty>){
            let party = a.payload;
            party.id = Math.round(Math.random() * 100000) + 1000;
            party.is_registered = true;
            party.registered_people = 1;
            s.parties.push(party)
        },

        joinParty(s:PartiesState, a:PayloadAction<number>){
            const id = a.payload;
            for(let i=0; i < s.parties.length; i++){
                let item = s.parties[i];
                if(item.id == id && item.registered_people < item.max_people && !item.is_registered){
                    item.registered_people += 1;
                    item.is_registered = true;
                    break;
                }
            }
        }
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