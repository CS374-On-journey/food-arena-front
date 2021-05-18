import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import LeftMenu from 'app/components/LeftMenu';
import Map from 'app/components/Map';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
      <div>
        <Map/>
        <LeftMenu/>
      </div>
    </>
  );
}
