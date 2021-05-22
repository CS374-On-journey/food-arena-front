import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const baseSelector = (state: RootState) => state.party;

const partySelector = createSelector(
  baseSelector,
  partyState => partyState?.parties,
);

export { partySelector };