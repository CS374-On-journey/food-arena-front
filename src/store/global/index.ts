import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { GlobalState } from './types';
import { useInjectReducer } from 'utils/redux-injectors';

// The initial state of the Homepage
export const initialState: GlobalState = {
  tab: 'place',
  partyRegisterationOn: false,
  partyRegisterationTargetId: 0,
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeTab(state, action: PayloadAction<string>) {
      state.tab = action.payload;
      return state;
    },

    setPartyRegisterationOn(state, action: PayloadAction<boolean>) {
      state.partyRegisterationOn = action.payload;
      return state;
    },

    setPartyRegisterationTargetId(state, action: PayloadAction<number>) {
      state.partyRegisterationTargetId = action.payload;
      return state;
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