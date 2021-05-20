import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { UserState } from './types';
import { useInjectReducer } from 'utils/redux-injectors';

// The initial state of the Homepage
export const initialState: UserState = {
  isSignedIn: false,
  user: {
    uid: '',
    displayName: '',
    photoURL: '',
  }
  
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    doLogin(state, action: PayloadAction<UserState>) {
      state.isSignedIn = true;
      state.user = action.payload.user;
    },
  },
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: userActions } = slice;

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};