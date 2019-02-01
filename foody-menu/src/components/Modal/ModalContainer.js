import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import Button from './Button';
import s from './ModalContainer.module.css';
import { addContact } from '../../redux/modules/contacts/contactsOperations';

class modalContainer extends Component {
  state = {
    isModalVisible: false,
  };

  handleCloseModal = () => {
    this.setState({ isModalVisible: false });
  };

  handleOpenModal = () => {
    this.setState({ isModalVisible: true });
  };

  render() {
    const { isModalVisible } = this.state;

    return (
      <div className={s.modalContainer}>
        <Button label="New Contact" onClick={this.handleOpenModal} />
        <Modal
          onClose={this.handleCloseModal}
          isOpen={isModalVisible}
          {...this.props}
        />
      </div>
    );
  }
}

const mapDispatch = {
  addContact: addContact,
};

export default connect(
  null,
  mapDispatch,
)(modalContainer);
