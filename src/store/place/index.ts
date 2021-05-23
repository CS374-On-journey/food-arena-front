import { PayloadAction } from '@reduxjs/toolkit';
import { buffers } from 'redux-saga';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅

import { useInjectReducer } from 'utils/redux-injectors';
import places from "./restaurants.json";

import { IPlace, IMenu, PlacesState } from './types';

// The initial state of the Homepage
function choice<T>(arr:Array<T>){
    return arr[Math.min(arr.length-1, Math.round(Math.random()*arr.length))]
}

function random_human(){
    return choice([ 'Sophia Kang', 'David Kim', 'Jonghyeon King', 'Heejun Lee', 'Minji Lee', 
    'Minuk Kim', 'Iviy Roson', 'Krukgej Frank', 'Matthew Miller', 'Ahmed Ashmar', 'Abdul Rebul', 'Tanaka Nakayoshi'])
}

function random_name() {
    return choice([
        'BHC', "Wolfgang's Steakhouse", "Donkey Chicken", "BBQ", "Outback", "GS25", "Seven Eleven", 
        "Hanaro Mart", "Hi Mart", "Samyukga", "Lotteria", "Burgerking", "Mcdonalds", "KFC", "Outdack", "Yellow Chicken", "Moms Touch"
    ])
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

function random_location() {
    return {
        longitude: Math.random()*0.1-74.0,
        latitude: Math.random()*0.08+40.7,
        readable: '4 Park Ave, New York'
    }
}

function random_menu(depth=10) {
    let title = choice([
        'Rib Steak', 'Hambuger', 'Palbochea', '1955 Burger', 'Cheese Burger', 'Spagetti', 'Waffer', 'Waffle', 'Doolly', 'Dobby', 'Fried Dobby', 'French Fried',
        'Cheese Stick', 'Chicken Wrap', 'Beef Wrap', 'Wolf Chick', 'Wolf Soup', 'Cheese Soup', 'Mushiroom Soup', 'Greek Salad', 'Tomato Soup', 'Fried Tomato', 'Koshari',
        'Torttia', 'Lotteria', 'King Jonghyeon', 'Wow Chicken', 'Matchoking', 'Spicy Matchoking', 'Bburingkle', 'Lamb Steak', 'Lamb Lag', 'Pork Chop', 'Pork Soup'
    ])
    let menu : IMenu = {
        id: Math.round(Math.random() * 987654321),
        title: title,
        picture_url: random_picture()[0],
        description:    `When it comes to steaks, for me, nothing beats the Americans. A small piece of well-marbled Japanese wagyu is wonderful as `+
                        `part of a teppanyaki or shabu shabu meal. And I can understand the need to exercise my jaws to enjoy the robust flavour of `+
                        `grass-fed South American beef. But if it is a hunky 300g slab of steak I'm hankering for, my choice will certainly be an USDA`+
                        ` ribeye - tender and with just the right balance of fat and muscle. And it seems many diners here agree with me, because yet another `+
                        `American steak restaurant has made its way here - Wolfgang's Steakhouse, which opened at the new InterContinental hotel in Robertson`+
                        ` Quay two weeks ago. It adds to other chains such as Morton's, Ruth's Chris and Cut that already have Singapore outlets. There has`+
                        ` been some confusion that the Wolfgang behind the restaurant is Wolfgang Puck, who is behind Cut in Marina Bay Sands. But it is`+
                        ` actually Mr Wolfgang Zwiener, who started his chain of restaurants in New York with his son Peter and other partners more than`+
                        ` 13 years ago. Unlike Cut, which offers premium beef from various parts of the world, Wolfgang's focuses on USDA Prime beef. It `+
                        `also distinguishes itself from the competition by dry-ageing the beef for 28 days - a process that allows enzymes in the meat to `+
                        `break down the muscle tissue, resulting in more tender and flavourful beef.`,
        type: '',
        local_title: title,
        local_price: Math.random()*100,
        local_currency: '$',
        local_quantity: Math.random()*1000,
        local_quantity_unit: 'g',

        local_format_quantity: '0',
        local_format_price_per_unit: '0.00',
        local_format_price: '0.0',

        children: Math.random() > 0.8 ? random_menus(depth-1) : [],
        isExpanded:false,
        label: null,
    }
    return menu;
}

function random_menus(depth=10) {
    if(depth <0) return []

    let ret = new Array<IMenu>();

    for(let i=0; i<10; i++){
        ret.push(random_menu(depth));
    }
    
    return ret;
}

function get_menus(place) {
    let ret = new Array<IMenu>();
    if(place.menus.length==0){
        return []
    }
    
    for(let i=0; i<place.menus.length; i++){
        let menu : IMenu = {
            id: i,
            title: place.menus[i].title,
            picture_url: place.menus[i].picture_url,
            description: place.menus[i].description,
            type: '',
            local_title: place.menus[i].title,
            local_price: Math.random()*100,
            local_currency: '$',
            local_quantity: Math.random()*1000,
            local_quantity_unit: 'g',

            local_format_quantity: '0',
            local_format_price_per_unit: '0.00',
            local_format_price: '0.0',
            children: get_menus(place.children),
            isExpanded:false,
            label: null,
        }
        ret.push(menu);
    }
    return ret;
}

export let managed_ids = new Array<number>();
function generate_id(){
    const id = Math.round(Math.random()*10000) + 11;
    managed_ids.push(id)
    return id;
}

function generate_random_places(places){
    for(let i=0; i<10; i++)
    {
        places.push(
            {
                id: generate_id(),
                name: random_name(),
                address: random_location(),
                distance: Math.round(Math.random()*500+500), // meter
                travel_time: Math.round(Math.random()*60+5), // minute
                waiting_time: Math.round(Math.random()*300+60), // minute
                open_time: '09:00',
                close_time: '22:00',
                local_time: `${Math.round(Math.random()*23)+1}:00`,
                tags: ['steak', 'luxery'],
                rating: Math.random()*5,
                ai_pick: Math.random() > 0.5,
                ai_score: Math.random()*5,
                picture_urls: random_picture(),
                reviews: [
                    {
                        author: random_human(),
                        content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling of a wildly raised cow. The flesh was a bit tough and strong.',
                        rating: Math.random()*5,
                        attachment_urls: []
                    },
                    {
                        author: random_human(),
                        content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling.',
                        rating: Math.random()*5,
                        attachment_urls: random_picture(),
                    },
                    {
                        author: random_human(),
                        content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling of a wildly raised cow. The flesh was a bit tough and strong.',
                        rating: Math.random()*5,
                        attachment_urls: []
                    },
                    {
                        author: random_human(),
                        content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling of a wildly raised cow. The flesh was a bit tough and strong.',
                        rating: Math.random()*5,
                        attachment_urls: []
                    }
                ],
                menus: random_menus(),
                submenu_opened: false,
                submenu_selected: false,
            }
        )
    }
    return places
}

let generated_places = new Array()
for(let i=0; i<2; i++)
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
            distance: (<any>places).places.restaurants[i].distance, // meter
            travel_time: (<any>places).places.restaurants[i].travel_time, // minute
            waiting_time: (<any>places).places.restaurants[i].waiting_time, // minute
            open_time: '09:00',
            close_time: '22:00',
            local_time: `${Math.round(Math.random()*23)+1}:00`,
            tags: (<any>places).places.restaurants[i].tags,
            rating: (<any>places).places.restaurants[i].rating,
            ai_pick: (<any>places).places.restaurants[i].ai_score > 4.0,
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
            menus: get_menus((<any>places).places.restaurants[i]),
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