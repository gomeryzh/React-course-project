import { combineReducers } from 'redux';
import menuReducer from './Menu/menuReducer';

export default combineReducers({
  menu: menuReducer,
});
