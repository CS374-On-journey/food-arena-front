import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const baseSelector = (state: RootState) => state.global;

const tabSelector = createSelector(
  baseSelector,
  placeState => placeState?.tab,
);


export { tabSelector };