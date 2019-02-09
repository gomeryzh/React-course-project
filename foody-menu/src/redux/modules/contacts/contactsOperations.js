import axios from 'axios';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addContactSuccess,
  deleteContactSuccess,
} from './contactsActions';

axios.defaults.baseURL = 'http://localhost:3004';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await axios.get('/menu');
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const addContact = ({ name, email, phone }) => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await axios.post('/contacts', {
      name,
      phone,
      email,
    });
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(fetchRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
