import { connect } from 'react-redux';
import React, { Component } from 'react';
import ContactsList from './ContactsList';

import { filteredProducts } from '../../redux/modules/contacts/contactsSelector';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/modules/contacts/contactsOperations';
import { addToCart } from '../../redux/modules/Cart/actions';

import AppHeader from '../AppHeader/AppHeader';
class ContactsListContainer extends Component {
  componentDidMount = () => {
    this.props.fetchContacts();
    console.log(this.props);
  };

  render() {
    return (
      <>
        <AppHeader />
        <ContactsList {...this.props} />
      </>
    );
  }
}

const mapState = state => ({
  contacts: filteredProducts(state),
});

const mapDispatch = {
  fetchContacts,
  addContact,
  deleteContact,
  addToCart,
};

export default connect(
  mapState,
  mapDispatch,
)(ContactsListContainer);
