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

function random_picture() {
    let buf = new Array()
    for(let i =0; i<5; i++){
        buf.push(choice([
            'https://media.timeout.com/images/103504187/630/472/image.jpg',
            'https://resizer.otstatic.com/v2/photos/wide-huge/1/30102456.jpg',
            'https://mp-seoul-image-production-s3.mangoplate.com/192731/p1erzbe2v6e9ig.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80',
            'https://qul.imgix.net/030160f4-7998-4d7f-88e3-ba0e92929220/558553_sld.jpg',
            'https://dimg.donga.com/a/500/0/90/5/ugc/CDB/29STREET/Article/5e/b2/04/e8/5eb204e81752d2738236.jpg',
            'https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/11/104866432.2.jpg',
            'http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg',
            'https://img.khan.co.kr/news/2019/05/30/l_2019053101003584700279572.jpg',
            'https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2015/05/23/c_km601/432212_540.jpg',
            'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/8e0d02fc-c587-415b-aa23-4b218b2fd3c2.jpeg',
            'https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2016/03/29/c_km601/911811_540.jpg',
            'http://t1.daumcdn.net/liveboard/realfood/ae1ba57635dc409e9bf6d970f4578780.JPG',
            'https://t1.daumcdn.net/liveboard/interstella-story/af605d13c3894dc8bc0a20407baf54e9.JPG',
            'https://www.sisaweekly.com/news/photo/202005/31622_47966_2831.jpg',
        ]))
    }
    return buf
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
            menu_text: '밥',
            registered_people: 4,
            max_people: 4,
            ban_rules: [
                '금지사항 1',
                '금지사항 2',
                '금지사항 3',
            ],
            picture_urls: random_picture()
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