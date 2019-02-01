import {
  ADD_SUCCESS,
  DELETE_SUCCESS,
  CHANGE_FILTER,
  FETCH_REQUEST,
  FETCH_SUCCESS,
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
  fetchError,
  fetchItem,
};
