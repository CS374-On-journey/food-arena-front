import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const baseSelector = (state: RootState) => state.place;

const placeSelector = createSelector(
  baseSelector,
  placeState => placeState?.places,
);

export { placeSelector };