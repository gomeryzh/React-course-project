import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
import s from './MenuList.module.css';
import MenuListItem from './MenuListItem';

const MenuList = ({ menu = [] }) => (
  <ul>
    {menu.map(item => (
      <li key={item.id}>
        <MenuListItem
          key={item.id}
          {...item}
          imgSrc={item.image}
          itemId={item.id}
        />
      </li>
    ))}
  </ul>
);

export default MenuList;
