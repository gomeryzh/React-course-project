import { combineReducers } from 'redux';
import entityReducer from './Cart/reducers/entityReducer';
import cartReducer from './Cart/reducers/cartReducer';
import contactsReducer from './contacts/contactsReducer';

export default combineReducers({
  contacts: contactsReducer,
  entities: entityReducer,
  cart: cartReducer,
});
