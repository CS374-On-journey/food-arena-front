import * as React from 'react';
import styled from 'styled-components/macro';
import mapboxgl from 'mapbox-gl';

import { useSelector, useDispatch } from 'react-redux';

import { useMapSlice } from 'store/map';
import { selectCenter } from 'store/map/selectors';

import { usePlaceSlice } from 'store/place';
import { placeSelector, selectedPlaceSelector, selectRestaurantById } from 'store/place/selectors';
import { IPlace } from 'store/place/types';

import { usePartySlice } from 'store/party';
import { partySelector } from 'store/party/selectors';

import { useGlobalSlice } from 'store/global';
import { tabSelector } from 'store/global/selectors';

import RestaurantIcon from './RestaurantIcon'
import { ILocation } from 'store/map/types';
import { IParty } from 'store/party/types';

const Box = styled.div`
    width: 100vw;
    height: 100vh;
    background: #545454;
    position: fixed;
`

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
`

//Token by Heejun
mapboxgl.accessToken = 'pk.eyJ1IjoiZ21sd25zNTE3NiIsImEiOiJja280ZDZ6aDIwbzdoMnVwZG1lbXY2djd1In0.vSiPLE6d_vKC3iZkXaac7w';
const MAP_ELEMENT_ID = "__mapboxgl_container__"
let map;
let map_markers = new Array<mapboxgl.Marker>();

export default function Map() {
    const [mapInited, setMapInited] = React.useState(false);
    const [viewCenter, setViewCenter] = React.useState<ILocation|null>({latitude:0, longitude:0});
    const [viewTab, setViewTab] = React.useState('');
    const [viewPlace, setViewPlace] = React.useState<IPlace|null>(null);

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

    React.useEffect(()=>{
        console.log('map box gl init')
        
        map = new mapboxgl.Map({
            container: MAP_ELEMENT_ID,
            style: 'mapbox://styles/mapbox/streets-v11'
        })

        setViewCenter({latitude:0, longitude:0});
        setViewTab('')
        setMapInited(true);
    },[])

    if(mapInited)
    {
        if(viewTab != currentTab){
            for(let i=0; i<map_markers.length; i++)
            {
                let item = map_markers[i];
                item.remove();
            }

            if(currentTab == 'place')
            {
                for(let i =0; i<places.length; i++){
                    let item = places[i]
                    let loc = [item.address.longitude, item.address.latitude];

                    let marker = new mapboxgl.Marker()
                    marker.setLngLat(loc as [number, number]).addTo(map)

                    map_markers.push(marker)
                }
            }
            else
            {
                for(let i =0; i<parties.length; i++){
                    let item = parties[i]
                    let restaurant = places.filter((i, idx, arr)=>i.id==item.restaurant_id)[0];
                    if(restaurant){
                        let loc = [restaurant.address.longitude, restaurant.address.latitude];

                        let marker = new mapboxgl.Marker()
                        marker.setLngLat(loc as [number, number]).addTo(map)

                        map_markers.push(marker)
                    }
                }
            }

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
                map.setZoom(15)
                map.setCenter([loc.longitude - 0.003, loc.latitude])
            }
            else
            {
                let loc_sum = [0.0, 0.0]
                for(let i =0; i<map_markers.length; i++){
                    let item = map_markers[i]
                    let loc = [item.getLngLat().lng, item.getLngLat().lat];
                    loc_sum = [loc_sum[0]+loc[0], loc_sum[1]+loc[1]];
                }
                loc_sum = [
                    loc_sum[0]/map_markers.length - 0.025, 
                    loc_sum[1]/map_markers.length
                ]
                map.setZoom(12)
                map.setCenter(loc_sum)
            }
            setViewCenter(requestedCenter as ILocation|null);
        }
    }

    return (
        <Box>
            <MapContainer id={MAP_ELEMENT_ID}/>
        </Box>
    );
}   