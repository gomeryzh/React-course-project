import { combineReducers } from 'redux';
import * as types from './contactsActionsTypes';

function contactsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS1:
      return payload;
    case types.ADD_SUCCESS:
      return [...state, payload];
    case types.DELETE_SUCCESS:
      return state.filter(item => item.id !== payload);
    case types.FETCH_ITEM:
      return payload.id;

    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
