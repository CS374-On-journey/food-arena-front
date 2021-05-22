import { createSelector } from '@reduxjs/toolkit';
import { P } from 'app/pages/NotFoundPage/P';
import { createSelectorHook } from 'react-redux';
import { RootState } from 'types';
import { initialState } from '.';

import { IPlace } from './types';

export const baseSelector = (state: RootState) => state.place;

const placeSelector = createSelector(
  baseSelector,
  placeState => placeState?.places,
);

const selectedPlaceSelector = createSelector(
  baseSelector,
  (state) => {
    if(!state) return undefined;

    let places = state.places as IPlace[];
    for(let i=0; i<places.length; i++){
      let item = places[i];
      if(item.submenu_selected && item.submenu_opened) return item;
    }
  }
)

const menuViewerOpenedSelector = createSelector(
  baseSelector,
  s => s?.menu_viewer_opened,
)

export { placeSelector, selectedPlaceSelector, menuViewerOpenedSelector };