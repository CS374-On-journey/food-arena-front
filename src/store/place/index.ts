import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { PlacesState } from './types';
import { useInjectReducer } from 'utils/redux-injectors';

// The initial state of the Homepage
export const initialState: PlacesState = {
  places: [
    {
      id: 1,
      name: 'Wolfgang`s Steakhouse',
      address: {
        longitude: 1,
        latitude: 1,
        readable: '4 Park Ave, New York'
      },
      distance: 700, // meter
      travel_time: 10, // minute
      waiting_time: 120, // minute
      open_time: '09:00',
      close_time: '22:00',
      rating: 4.8,
      ai_pick: true,
      ai_score: 4.8,
      picture: [
        'https://media.timeout.com/images/103504187/630/472/image.jpg',
        'https://resizer.otstatic.com/v2/photos/wide-huge/1/30102456.jpg',
        'https://mp-seoul-image-production-s3.mangoplate.com/192731/p1erzbe2v6e9ig.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80',
        'https://qul.imgix.net/030160f4-7998-4d7f-88e3-ba0e92929220/558553_sld.jpg'
      ],
      reviews: [
        {
          author: 'Yeari Kim',
          content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling of a wildly raised cow. The flesh was a bit tough and strong.',
          rating: 4.8,
          attatchment_urls: []
        },
        {
          author: 'Sophia Kim',
          content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling.',
          rating: 3.2,
          attatchment_urls: [
            'https://media.timeout.com/images/103504187/630/472/image.jpg',
            'https://resizer.otstatic.com/v2/photos/wide-huge/1/30102456.jpg',
            'https://mp-seoul-image-production-s3.mangoplate.com/192731/p1erzbe2v6e9ig.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80',
            'https://qul.imgix.net/030160f4-7998-4d7f-88e3-ba0e92929220/558553_sld.jpg'
          ]
        },
        {
          author: 'Mario David',
          content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling of a wildly raised cow. The flesh was a bit tough and strong.',
          rating: 4.2,
          attatchment_urls: []
        },
        {
          author: 'Doge Coin',
          content: 'The Wolfgang Steak is one of the three biggest steaks in New York! It felt really different from Peter Ruger. Peter Ruger was the soft feeling of a carefully raised cow, while the Wolfgang was the feeling of a wildly raised cow. The flesh was a bit tough and strong.',
          rating: 1.8,
          attatchment_urls: []
        }
      ]
    }
  ]
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