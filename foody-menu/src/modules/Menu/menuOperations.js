import axios from 'axios';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addNoteSuccess,
  deleteNoteSuccess,
  toggleNoteSuccess,
} from './menuActions';

const fetchMenuItems = () => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await axios.get('http://localhost:3005/menu');
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export { fetchMenuItems, addNote, deleteNote, toggleNote };
