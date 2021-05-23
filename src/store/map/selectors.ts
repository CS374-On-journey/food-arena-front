import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const baseSelector = (state: RootState) => state.map;

const selectCenter = createSelector(
  baseSelector,
  s => s?.center,
);

export { selectCenter };