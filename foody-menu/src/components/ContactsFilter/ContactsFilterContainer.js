import { connect } from 'react-redux';
import ContactsFilter from './ContactsFilter';
import { getFilter } from '../../redux/modules/contacts/contactsSelector';
import { filterContact } from '../../redux/modules/contacts/contactsActions';

const mapState = state => ({
  value: getFilter(state),
});

const mapDispatch = {
  onChange: filterContact,
};

export default connect(
  mapState,
  mapDispatch,
)(ContactsFilter);
