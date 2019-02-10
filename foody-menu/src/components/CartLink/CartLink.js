import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as s from './CartLink.module.css';

export default class CartLink extends Component {
  render() {
    const { amount } = this.props;
    return (
      <Link to="/cart">
        <div className={s.container}>
          <img
            src="https://image.flaticon.com/icons/svg/1420/1420798.svg"
            width="40"
            alt=""
          />
          <span className={s.amount}>{amount}</span>
        </div>
      </Link>
    );
  }
}
