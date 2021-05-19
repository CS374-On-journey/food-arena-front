import { createSelector } from '@reduxjs/toolkit';
import { PlacesState } from './types';

export const baseSelector = (state: PlacesState) => state;

const placeSelector = createSelector(
  baseSelector,
  placeState => placeState,
);

export { placeSelector };