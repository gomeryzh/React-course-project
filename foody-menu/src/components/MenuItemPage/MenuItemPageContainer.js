import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getContactbyID } from '../../redux/modules/contacts/contactsSelector';
import { getMenuItemById } from '../../redux/modules/contacts/contactsOperations';
import MenuItemPage from './MenuItemPage';

class ContactsListContainer extends Component {
  componentDidMount = () => {
    this.props.getMenuItemById();
    console.log(this.props);
  };

  render() {
    return <MenuItemPage {...this.props} />;
  }
}

// const mapState = (state, id) => ({
//   contacts: getContactbyID(state, id),
// });

const mapDispatch = {
  getMenuItemById,
};

export default connect(
  null,
  mapDispatch,
)(ContactsListContainer);
