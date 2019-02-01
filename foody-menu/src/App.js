import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactsList from './components/ContactsList/ContactsListContainer';
import AppHeader from './components/AppHeader/AppHeader';
import Modal from './components/Modal/ModalContainer';
import Loader from './components/Loader/Loader';
import MenuItemPage from './components/MenuItemPage/MenuItemPageContainer';

const App = () => (
  <>
    <AppHeader />
    <Switch>
      <Suspense fallback={<Loader />}>
        <Route exact path="/menu" component={ContactsList} />
        <Route exact path="/menu/:id" component={MenuItemPage} />
        <Route exact path="/add" component={Modal} />
      </Suspense>
    </Switch>
  </>
);

export default App;
