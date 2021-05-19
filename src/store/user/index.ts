import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { UserState } from './types';
import { useInjectReducer } from 'utils/redux-injectors';

// The initial state of the Homepage
export const initialState: UserState = {
  username: 'Initial username for my state',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      // Here we say lets change the username in my homepage state when changeUsername actions fires
      // Type-safe: It will expect `string` when firing the action. ✅
      state.username = action.payload;
    },
  },
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: homepageActions } = slice;

export const useHomepageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};