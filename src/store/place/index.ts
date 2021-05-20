import { PayloadAction } from '@reduxjs/toolkit';
import { buffers } from 'redux-saga';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅

import { useInjectReducer } from 'utils/redux-injectors';

import { PlacesState } from './types';

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
      'https://lh3.googleusercontent.com/proxy/eELDUI5yTzHVFnJ1-wb3veU_S_nKsOG2E-nijvQUm2w31XhvdK15lAAw5KML5w1IRFrgoZtPNehrYmwFI3w6CW5JeZ1BtGjaSFD3Am5-WP4QE3eomicyKQdajniFWRE',
    ]))
  }
  return buf
}

function random_location() {
  return {
    longitude: Math.random()*0.1-74.0,
    latitude: Math.random()*1.2+40.7,
    readable: '4 Park Ave, New York'
  }
}

let generated_places = new Array()
for(let i=0; i<10; i++){
  generated_places.push(
    {
      id: i+1,
      name: random_name(),
      address: random_location(),
      distance: Math.round(Math.random()*500+500), // meter
      travel_time: Math.round(Math.random()*60+5), // minute
      waiting_time: Math.round(Math.random()*300+60), // minute
      open_time: '09:00',
      close_time: '22:00',
      local_time: '20:00',
      tags: ['steak', 'luxery'],
      rating: Math.random()*5,
      ai_pick: Math.random() > 0.5,
      ai_score: Math.random()*5,
      picture: random_picture(),
      reviews: [
        {
          author: random_human(),
          content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling of a wildly raised cow. The flesh was a bit tough and strong.',
          rating: Math.random()*5,
          attatchment_urls: []
        },
        {
          author: random_human(),
          content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling.',
          rating: Math.random()*5,
          attatchment_urls: random_picture(),
        },
        {
          author: random_human(),
          content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling of a wildly raised cow. The flesh was a bit tough and strong.',
          rating: Math.random()*5,
          attatchment_urls: []
        },
        {
          author: random_human(),
          content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling of a wildly raised cow. The flesh was a bit tough and strong.',
          rating: Math.random()*5,
          attatchment_urls: []
        }
      ],
      menus: [],
    }
  )
}

export const initialState: PlacesState = {
  places: generated_places
};

const slice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    // addPlace(state, action: PayloadAction<string>) {
    //   // Here we say lets change the username in my homepage state when changeUsername actions fires
    //   // Type-safe: It will expect `string` when firing the action. ✅
    //   state.username = action.payload;
    // },
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