import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './Pages/NotFoundPage';
import Loader from './Loader/Loader';

const AsyncMenuItemsPage = lazy(
  () => import('./Menu/MenuItemsPage'),
  /* webpackChunkName: "MenuItemsPage"
   */
);

const AsyncMenuItemPage = lazy(
  () => import('./Menu/MenuItemPage'),
  /* webpackChunkName: "MenuItemPage"
   */
);

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route exact path="/menu/:id" component={AsyncMenuItemPage} />
            <Route exact path="/menu" component={AsyncMenuItemsPage} />

            <Route exact path="/NotFoundPage" component={NotFoundPage} />
          </Suspense>
        </Switch>
      </div>
    );
  }
}
