import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';
import { IParty } from './types';

export const baseSelector = (state: RootState) => {
  return state.party;
}

export const partySelector = createSelector(
  baseSelector,
  partyState => partyState?.parties,
);

export const selectPartyByRestaurantId = (id) => createSelector(
  baseSelector,
  s => {
    let parties = s?.parties as IParty[];
    let ret;
    if(parties && parties.length > 0) ret = parties[0];
    for(let i = 0; i< parties?.length; i++)
    {
      let item = parties[i];
      if(item.restaurant_id == id && item.registered_people < item.max_people){
        ret=item;
        break;
      }
    }
    return ret;
  }
)

export const selectPartiesByRestaurantId = (id) => createSelector(
  baseSelector,
  s => {
    let parties = s?.parties as IParty[];
    let ret = new Array<IParty>();
    for(let i = 0; i< parties?.length; i++)
    {
      let item = parties[i];
      if(item.restaurant_id == id) ret.push(item);
    }
    return ret;
  }
)

export const selectRegisteredParties = createSelector(
  baseSelector,
  s => {
    let parties = s?.parties as IParty[];
    let ret = new Array<IParty>();
    for(let i = 0; i< parties?.length; i++)
    {
      let item = parties[i];
      if(item.is_registered) ret.push(item);
    }
    return ret;
  }
)

export const selectKeyword = createSelector(
  baseSelector,
  s => s?.search_term,
)