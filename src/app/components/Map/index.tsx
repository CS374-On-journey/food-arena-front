import * as React from 'react';
import styled from 'styled-components/macro';
import mapboxgl from 'mapbox-gl';

import { useSelector, useDispatch } from 'react-redux';

import { usePlaceSlice } from 'store/place';
import { placeSelector } from 'store/place/selectors';
import { IPlace } from 'store/place/types'
import { formatWithOptions } from 'util';

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

export default function Map() {
    //Token by Heejun
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ21sd25zNTE3NiIsImEiOiJja280ZDZ6aDIwbzdoMnVwZG1lbXY2djd1In0.vSiPLE6d_vKC3iZkXaac7w';

    const {actions} = usePlaceSlice();
    const places = useSelector(placeSelector) as IPlace[];

    React.useEffect(()=>{
        console.log('map box gl init')

        let map = new mapboxgl.Map({
            container: 'MapMapMap',
            style: 'mapbox://styles/mapbox/streets-v11'
        });
        
        let loc_sum = [0.0, 0.0]
        for(let i =0; i<places.length; i++){
            let item = places[i]
            let loc = [item.address.longitude, item.address.latitude];
            loc_sum = [loc_sum[0]+loc[0], loc_sum[1]+loc[1]];
            let marker = new mapboxgl.Marker().setLngLat(loc).addTo(map)
            console.log('add', loc)
        }

        map.setZoom(12)
        map.setCenter([
            loc_sum[0]/places.length - 0.025, 
            loc_sum[1]/places.length
        ])
    },[])

    return (
        <Box>
            <MapContainer id='MapMapMap'/>
        </Box>
    );
}   