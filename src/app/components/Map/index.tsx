import * as React from 'react';
import styled from 'styled-components/macro';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

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
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ21sd25zNTE3NiIsImEiOiJja280ZDZ6aDIwbzdoMnVwZG1lbXY2djd1In0.vSiPLE6d_vKC3iZkXaac7w';

    React.useEffect(()=>{
        let map = new mapboxgl.Map({
            container: 'MapMapMap',
            style: 'mapbox://styles/mapbox/streets-v11'
        });
    }, [])

    return (
        <Box>
            <MapContainer id='MapMapMap'/>
        </Box>
    );
}   