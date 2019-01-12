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
    const response = await axios.get('http://localhost:3004/menu');
    console.log(response.data);
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

const addNote = text => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await axios.post('http://localhost:3005/notes', {
      text,
      completed: false,
    });
    dispatch(addNoteSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

const deleteNote = id => async dispatch => {
  dispatch(fetchRequest());

  try {
    await axios.delete(`http://localhost:3005/notes/${id}`);
    dispatch(deleteNoteSuccess(id));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

const toggleNote = id => async dispatch => {
  dispatch(fetchRequest());

  try {
    axios.patch(`http://localhost:3005/notes/${id}`);
    dispatch(toggleNoteSuccess(id));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export { fetchMenuItems, addNote, deleteNote, toggleNote };
