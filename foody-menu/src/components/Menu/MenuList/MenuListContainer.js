import { connect } from 'react-redux';
import React, { Component } from 'react';
import MenuList from './MenuList';
import { filteredMenu } from '../../../modules/Menu/menuSelector';
import {
  fetchMenuItems,
  deleteNote,
  toggleNote,
} from '../../../modules/Menu/menuOperations';
import MenuFilter from '../MenuFilter/MenuFilterContainer';
import CategorySelector from '../CategorySelector/CategorySelectorContainer';

class MenuListContainer extends Component {
  componentDidMount() {
    this.props.fetchMenuItems();
  }

  render() {
    return (
      <>
        <MenuFilter />
        <CategorySelector />
        <MenuList {...this.props} />
      </>
    );
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
