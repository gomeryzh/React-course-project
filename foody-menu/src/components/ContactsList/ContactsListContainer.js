import { connect } from 'react-redux';
import React, { Component } from 'react';
import ContactsList from './ContactsList';
import { filteredProducts } from '../../redux/modules/contacts/contactsSelector';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/modules/contacts/contactsOperations';

class ContactsListContainer extends Component {
  componentDidMount = () => {
    this.props.fetchContacts();
    console.log(this.props);
  };

  render() {
    return <ContactsList {...this.props} />;
  }
}

const mapState = state => ({
  contacts: filteredProducts(state),
});

const mapDispatch = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default connect(
  mapState,
  mapDispatch,
)(ContactsListContainer);
