import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './components/Pages/NotFoundPage';
import Loader from './components/Loader/Loader';

const AsyncMenuItemPage = lazy(
  () => import('./components/Menu/MenuItem/MenuItemPage'),
  /* webpackChunkName: "MenuItemPage"cd
   */
);

const AsyncMenuList = lazy(() =>
  import('./components/Menu/MenuList/MenuListContainer'),
);

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route exact path="/menu" component={AsyncMenuList} />
            <Route exact path="/menu/:id" component={AsyncMenuItemPage} />

            <Route exact path="/NotFoundPage" component={NotFoundPage} />
          </Suspense>
        </Switch>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </div>
    );
  }
}
