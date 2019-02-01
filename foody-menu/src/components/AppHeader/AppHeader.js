import React from 'react';
import ContactsFilter from '../ContactsFilter/ContactsFilterContainer';
import * as s from './AppHeader.module.css';

const AppHeader = () => (
  <header className={s.header}>
    <ContactsFilter />
  </header>
);

export default AppHeader;
