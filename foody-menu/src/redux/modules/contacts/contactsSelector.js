import { createSelector } from 'reselect';

const getFilter = state => state.contacts.filter;

const getProductIds = state => state.contacts.items;

const getProductsEntities = state => state.entities.menu;

const getProducts = createSelector(
  [getProductIds, getProductsEntities],
  (ids, entities) => ids.map(id => entities[id]),
);

const filteredProducts = createSelector(
  [getProductIds, getProductsEntities, getFilter],
  (ids, entities, filter) =>
    ids
      .map(id => entities[id])
      .filter(item => item.name.toLowerCase().includes(filter)),
);

export { getProducts, getProductsEntities, getFilter, filteredProducts };
