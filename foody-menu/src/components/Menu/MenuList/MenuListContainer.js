import { connect } from 'react-redux';
import React, { Component } from 'react';
import MenuList from './MenuList';
import { filteredMenu, getItems } from '../../../modules/Menu/menuSelector';
import {
  fetchMenuItems,
  deleteNote,
  toggleNote,
} from '../../../modules/Menu/menuOperations';

class MenuListContainer extends Component {
  componentDidMount() {
    this.props.fetchMenuItems();
  }

  render() {
    return <MenuList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  menu: filteredMenu(state),
});

const mapDispatchToProps = { fetchMenuItems, deleteNote, toggleNote };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuListContainer);
