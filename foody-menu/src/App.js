import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './components/Pages/NotFoundPage';
import Loader from './components/Loader/Loader';
import MenuList from './components/Menu/MenuList/MenuList';

const AsyncMenuItemsPage = lazy(
  () => import('./components/Menu/MenuItemsPage'),
  /* webpackChunkName: "MenuItemsPage"
   */
);

const AsyncMenuItemPage = lazy(
  () => import('./components/Menu/MenuItem/MenuItemPage'),
  /* webpackChunkName: "MenuItemPage"
   */
);

const AsyncMenuList = lazy(() => import('./components/Menu/MenuList/MenuList'));

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <MenuList />
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route exact path="/menuList" component={AsyncMenuList} />
            <Route exact path="/menu/:id" component={AsyncMenuItemPage} />
            <Route exact path="/menu" component={AsyncMenuItemsPage} />

            <Route exact path="/NotFoundPage" component={NotFoundPage} />
          </Suspense>
        </Switch>
      </div>
    );
  }
}
