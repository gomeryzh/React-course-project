import { connect } from 'react-redux';
import React, { Component } from 'react';
import ContactsList from './ContactsList';
import {
  filteredContacts,
  getProducts,
  filterProducts,
} from '../../redux/modules/contacts/contactsSelector';
import {
  fetchContacts1,
  addContact,
  deleteContact,
} from '../../redux/modules/contacts/contactsOperations';

class ContactsListContainer extends Component {
  componentDidMount = () => {
    this.props.fetchContacts1();
    console.log(this.props);
  };

  render() {
    return <ContactsList {...this.props} />;
  }
}

const mapState = state => ({
  contacts: filterProducts(state),
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
