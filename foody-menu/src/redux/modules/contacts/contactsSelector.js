import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const filteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) =>
    items.filter(item => item.name.toLowerCase().includes(filter)),
);

const getContactbyID = createSelector(
  [getContacts],
  items => items.find(({ id }) => id),
);

export { getContacts, getFilter, filteredContacts, getContactbyID };
