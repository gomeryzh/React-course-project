import React, { Component } from 'react';
import Button from '../Modal/Button';
import s from './Cart.module.css';

export default class Cart extends Component {
  handleGoToMenu = () => {
    const { history } = this.props;
    return history.push({
      pathname: '/menu',
    });
  };
  render() {
    const {
      products = [],
      removeFromCart,
      incrementProductAmount,
      decrementProductAmount,
    } = this.props;
    return products.length > 0 ? (
      <div className={s.container}>
        <table className={s.table}>
          <tbody>
            {products.map(({ id, name, amount }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>
                  <button
                    className={s.button}
                    onClick={() => {
                      incrementProductAmount(id);
                    }}
                  >
                    +
                  </button>
                  {amount}
                  <button
                    className={s.button}
                    onClick={() => {
                      decrementProductAmount(id);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    className={s.button}
                    onClick={() => {
                      removeFromCart(id);
                    }}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button label="Go back to Menu" onClick={this.handleGoToMenu} />
      </div>
    ) : (
      <>
        <h1>В корзине нет товаров!</h1>
        <Button label="Go back to Menu" onClick={this.handleGoToMenu} />
      </>
    );
  }
}
