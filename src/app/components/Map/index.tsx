import * as React from 'react';
import styled from 'styled-components/macro';
//import mapboxgl from 'mapbox-gl'
import MapGL, {Marker} from 'react-map-gl';

import { useSelector, useDispatch } from 'react-redux';

import { useMapSlice } from 'store/map';
import { selectCenter } from 'store/map/selectors';

import { usePlaceSlice } from 'store/place';
import { placeSelector, selectedPlaceSelector, selectRestaurantById } from 'store/place/selectors';
import { IPlace } from 'store/place/types';

import { usePartySlice } from 'store/party';
import { partySelector, selectPartyByRestaurantId } from 'store/party/selectors';

import { useGlobalSlice } from 'store/global';
import { tabSelector } from 'store/global/selectors';

import { ILocation } from 'store/map/types';
import { IParty } from 'store/party/types';

import RestaurantIcon from './RestaurantIcon'
import PartyIcon from './PartyIcon';

const Box = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
`

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
`

//Token by Heejun
const MAP_TOKEN = 'pk.eyJ1IjoiZ21sd25zNTE3NiIsImEiOiJja280ZDZ6aDIwbzdoMnVwZG1lbXY2djd1In0.vSiPLE6d_vKC3iZkXaac7w';
const MAP_ELEMENT_ID = "__mapboxgl_container__"
//mapboxgl.accessToken = MAP_TOKEN

export default function Map() {
    const [viewCenter, setViewCenter] = React.useState<ILocation|null>({latitude:0, longitude:0});
    const [viewTab, setViewTab] = React.useState('');
    const [viewPlace, setViewPlace] = React.useState<IPlace|null>(null);
    const [mapViewport, setMapViewport] = React.useState({
        latitude:0,
        longitude:0,
        zoom:12,
    })

    const dispatch = useDispatch();

    const {actions:placeActions} = usePlaceSlice();
    const places = useSelector(placeSelector) as IPlace[];
    const selectedPlace = useSelector(selectedPlaceSelector) as IPlace;

    const {actions:mapActions} = useMapSlice();
    const requestedCenter = useSelector(selectCenter);

    const {actions:globalActions} = useGlobalSlice();
    const currentTab = useSelector(tabSelector);

    const {actions:partyActions} = usePartySlice();
    const parties = useSelector(partySelector) as IParty[];
    
    let markers = new Array<any>();
    if(currentTab == 'place')
    {
        for(let i =0; i<places.length; i++){
            let item = places[i]
            let loc = [item.address.longitude, item.address.latitude];
            
            //ADD MARKER
            if(item.visible){
                markers.push({
                    loc: loc,
                    elem: (<RestaurantIcon restaurant={item} viewport={mapViewport}/>),
                })
            }
        }
    }
    else
    {
        let rids = new Array<number>();
        for(let i =0; i<parties.length; i++){
            let item = parties[i]
            let restaurant = places.filter((i, idx, arr)=>i.id==item.restaurant_id)[0];
            if(restaurant && rids.filter((i, idx, arr)=>i==restaurant.id).length == 0)
            {
                rids.push(restaurant.id)
            }
        }

        for(let i=0; i<rids.length; i++)
        {
            let restaurant = places.filter((item, idx, arr)=>item.id==rids[i])[0];
            let party;
            if(parties && parties.length > 0) party = parties[0];
            for(let i = 0; i< parties?.length; i++)
            {
                let item = parties[i];
                if(item.restaurant_id == restaurant.id && item.registered_people < item.max_people && item.visible){
                    party=item;
                    break;
                }
            }
            let loc = [restaurant.address.longitude, restaurant.address.latitude];
            //ADD MARKER
            if(party && party.visible){
                markers.push({
                    loc: loc,
                    elem: (<PartyIcon party={party} restaurant={restaurant} viewport={mapViewport}/>),
                })
            }
        }
    }
    if(viewTab != currentTab){

        setViewTab(currentTab as string);
    }
    
    if(viewPlace?.id != selectedPlace?.id)
    {
        if(selectedPlace)
        {
            let loc = {longitude:selectedPlace.address.longitude, latitude:selectedPlace.address.latitude}
            dispatch(mapActions.setCenter(loc))
        }
        else
        {
            dispatch(mapActions.setCenter(null))
        }
        setViewPlace(selectedPlace);
    }
    
    if(viewCenter != requestedCenter)
    {
        if(requestedCenter)
        {
            let loc = requestedCenter as ILocation;
            setMapViewport({
                latitude:loc.latitude,
                longitude:loc.longitude - 0.003,
                zoom:15,
            })
        }
        else if(markers.length > 0)
        {
            let loc_sum = [0.0, 0.0]
            for(let i =0; i<markers.length; i++){
                let loc = markers[i].loc
                loc_sum = [loc_sum[0]+loc[0], loc_sum[1]+loc[1]];
            }
            loc_sum = [
                loc_sum[0]/markers.length - 0.025, 
                loc_sum[1]/markers.length
            ]
            setMapViewport({
                latitude:loc_sum[1],
                longitude:loc_sum[0] - 0.003,
                zoom:12,
            })
        }
        setViewCenter(requestedCenter as ILocation|null);
    }

    const settings ={
        dragPan: true,
        dragRotate: true,
        scrollZoom: true,
        touchZoom: true,
        touchRotate: true,
        keyboard: true,
        doubleClickZoom: true,
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85,
    }

    return (
        <Box>
            <MapGL
            {...mapViewport}
            {...settings}
                width="100vw"
                height="100vh"
                mapboxApiAccessToken={MAP_TOKEN}
                mapStyle='mapbox://styles/mapbox/streets-v11'
                onViewportChange={nextViewport => setMapViewport(nextViewport)}
            >
                {
                    markers.map((item, idx, arr)=>{
                        return (
                            <Marker longitude={item.loc[0]} latitude={item.loc[1]} key={idx}>
                                {item.elem}
                            </Marker>
                        )
                    })
                }
            </MapGL>
        </Box>
    );
}