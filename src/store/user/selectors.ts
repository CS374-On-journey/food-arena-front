import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const baseSelector = (state: RootState) => state.user;

const isLogined = createSelector(
  baseSelector,
  placeState => placeState?.isSignedIn,
);

const getUser = createSelector(
  baseSelector,
  placeState => placeState?.user,
);

export { isLogined, getUser };