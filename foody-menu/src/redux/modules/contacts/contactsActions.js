import { normalize } from 'normalizr';
import * as schemas from '../../schemas/Schemas';

import {
  ADD_SUCCESS,
  DELETE_SUCCESS,
  CHANGE_FILTER,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_SUCCESS1,
  FETCH_ERROR,
  FETCH_ITEM,
} from './contactsActionsTypes';

const filterContact = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const addContactSuccess = contact => ({
  type: ADD_SUCCESS,
  payload: contact,
});

const deleteContactSuccess = id => ({
  type: DELETE_SUCCESS,
  payload: id,
});

const fetchItem = id => ({
  type: FETCH_ITEM,
  payload: { id },
});

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: FETCH_SUCCESS,
  payload: notes,
});

const fetchSuccess1 = menu => {
  const normalizedMenu = normalize(menu, [schemas.menuSchema]);
  console.log(normalizedMenu);
  return {
    type: FETCH_SUCCESS1,
    payload: {
      ids: {
        menu: Object.keys(normalizedMenu.entities.menu),
      },
      entities: normalizedMenu.entities,
    },
  };
};

const fetchError = error => ({
  type: FETCH_ERROR,
  payload: error,
});

export {
  addContactSuccess,
  deleteContactSuccess,
  filterContact,
  fetchRequest,
  fetchSuccess,
  fetchSuccess1,
  fetchError,
  fetchItem,
};
