# Food Arena

[![Netlify Status](https://api.netlify.com/api/v1/badges/a4c6484b-b7cd-4e53-a2d2-f3290d19ad95/deploy-status)](https://app.netlify.com/sites/on-journey/deploys)

This repository is the desgin project of team On-journey from KAIST 2021 CS374 class.

# URL

[https://on-journey.netlify.app/](https://on-journey.netlify.app/)

# Install

1. Clone the repository
2. `npm install` in the root directory
3. `yarn start`

# Library

We used [React Boiler Plate with CRA](https://cansahin.gitbook.io/react-boilerplate-cra-template/).

We used MapboxGL for map rendering and Firebase for database.

BaseUI for basic ui components.

- React boilerplate with CRA
- React-Map-GL, mapboxgl
- webpack
- babel
- baseui
- styled-components
- firebase
- numeral
- sweetalert2
- swiper
- redux

### Framework

- Typescript
- Node
- React


### Project Structure

```
├── README.md : Readme file
├── build : React build file (static and bundles)
├── config : config file of Webpack, devserver after CRA eject 
│   ├── env.js
│   ├── getHttpsConfig.js
│   ├── jest
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── internals : various script from rb-cra template
│   ├── extractMessages
│   ├── generators
│   ├── testing
│   └── ts-node.tsconfig.json
├── package-lock.json
├── package.json : package file
├── public : Static file (index.html, image..)
├── scripts : script files
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src : main source folder
│   ├── app : main react and components folder, where main feature implementations are
│   ├── index.tsx : Starting file
│   ├── locales
│   ├── react-app-env.d.ts : i18n files
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── store : main redux store folder
│   ├── styles : global style folder
│   ├── types : typescript type file
│   └── utils : template utils folder (reducer injection and saga injection)
├── tsconfig.json : typescript setting file
└── yarn.lock
```

### Main Routing file 

src/app/index.tsx
```
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { ChatPage } from './pages/ChatPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { useSelector, useDispatch } from 'react-redux';
import { useUserSlice } from 'store/user';
import { isLogined } from 'store/user/selectors';

export function App() {
  
  const { i18n } = useTranslation();

  const { actions } = useUserSlice();
  const isLogin = useSelector(isLogined);
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Food Arena (On-journey)"
        defaultTitle="Food Arena (On-journey)"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="2020 KAIST CS374 - Design Project - Team On-journey" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        { isLogin ? (
          <Route exact path="/chat" component={ChatPage} />
        ) : null}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
```