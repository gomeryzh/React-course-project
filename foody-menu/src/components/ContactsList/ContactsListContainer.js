import { connect } from 'react-redux';
import React, { Component } from 'react';
import ContactsList from './ContactsList';
import {
  filteredContacts,
  getProducts,
} from '../../redux/modules/contacts/contactsSelector';
import {
  fetchContacts1,
  addContact,
  deleteContact,
} from '../../redux/modules/contacts/contactsOperations';

class ContactsListContainer extends Component {
  componentDidMount = () => {
    this.props.fetchContacts1();
  };

  render() {
    return <ContactsList {...this.props} />;
  }
}

const mapState = state => ({
  contacts: getProducts(state),
});

const mapDispatch = {
  fetchContacts1,
  addContact,
  deleteContact,
};

export default connect(
  mapState,
  mapDispatch,
)(ContactsListContainer);
