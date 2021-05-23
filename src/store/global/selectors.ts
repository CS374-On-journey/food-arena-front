import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const baseSelector = (state: RootState) => state.global;

const tabSelector = createSelector(
  baseSelector,
  s => s?.tab,
);

const partyRegisterationOnSelector = createSelector(
  baseSelector,
  s => s?.partyRegisterationOn,
)

const partyRegisterationTargetIdSelector = createSelector(
  baseSelector,
  s => s?.partyRegisterationTargetId,
)

export { tabSelector, partyRegisterationOnSelector, partyRegisterationTargetIdSelector };