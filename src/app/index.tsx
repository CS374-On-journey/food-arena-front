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
