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

const getProductIds = state => state.contacts.items.ids.menu;

const getProductsEntities = state => state.contacts.items.entities.menu;

const getProducts = createSelector(
  [getProductIds, getProductsEntities],
  (ids, entities) => ids.map(id => entities[id]),
);

export {
  getProducts,
  getProductsEntities,
  getContacts,
  getFilter,
  filteredContacts,
  getContactbyID,
};
