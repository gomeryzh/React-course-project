import React from 'react';
import ContactsFilter from '../ContactsFilter/ContactsFilterContainer';
import * as s from './AppHeader.module.css';
import CartLink from '../CartLink/CartLinkContainer';

const AppHeader = () => (
  <header className={s.header}>
    <ContactsFilter />
    <CartLink />
  </header>
);

export default AppHeader;
