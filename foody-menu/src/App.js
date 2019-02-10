import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactsList from './components/ContactsList/ContactsListContainer';
import Modal from './components/Modal/ModalContainer';
import Loader from './components/Loader/Loader';
import Cart from './components/Cart/CartContainer';
import MenuItemPage from './components/MenuItem/MenuItemPage';

const App = () => (
  <>
    <Switch>
      <Suspense fallback={<Loader />}>
        <Route exact path="/menu" component={ContactsList} />
        <Route exact path="/menu/:id" component={MenuItemPage} />
        <Route exact path="/add" component={Modal} />
        <Route path="/cart" component={Cart} />
      </Suspense>
    </Switch>
  </>
);

export default App;
