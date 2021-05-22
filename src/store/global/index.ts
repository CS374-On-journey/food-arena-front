import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { GlobalState } from './types';
import { useInjectReducer } from 'utils/redux-injectors';

// The initial state of the Homepage
export const initialState: GlobalState = {
  tab: 'place'
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeTab(state, action: PayloadAction<GlobalState>) {
      state.tab = action.payload.tab;
    },
  },
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: userActions } = slice;

export const useGlobalSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};