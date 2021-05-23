import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { ILocation, MapState } from 'store/map/types';
import { useInjectReducer } from 'utils/redux-injectors';

// The initial state of the Homepage
export const initialState: MapState = {
  center: null,
};

const slice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCenter(state:MapState, action: PayloadAction<ILocation|null>) {
      state.center = action.payload;
      return state
    },
  },
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: userActions } = slice;

export const useMapSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};