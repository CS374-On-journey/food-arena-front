import { createSelector } from '@reduxjs/toolkit';
import { P } from 'app/pages/NotFoundPage/P';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { createSelectorHook } from 'react-redux';
import { RootState } from 'types';
import { initialState } from '.';
import { searchSelector } from 'store/global/selectors';
import { useSelector, useDispatch } from 'react-redux';

import { IPlace } from './types';
// import { Tab } from "../../app/components/LeftMenu/Tab/"
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

const selectRestaurantById = (id) => createSelector(
  baseSelector,
  s => {
    let places = s?.places as IPlace[];
    for(let i = 0; i< places.length; i++)
    {
      let item = places[i];
      if(item.id == id) return item;
    }
  }
)

export { placeSelector, selectedPlaceSelector, menuViewerOpenedSelector, selectRestaurantById };