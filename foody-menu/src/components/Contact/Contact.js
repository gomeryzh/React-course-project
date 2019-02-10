import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as s from './Contact.module.css';

const Contact = ({
  name,
  price,
  image,
  description,
  onDelete,
  onAddToCart,
  category,
  id,
  match,
  location,
}) => (
  <div className={s.container}>
    <Link
      to={{
        pathname: `${match.url}/${id}`,
        state: { from: location },
      }}
    >
      <h4>{name}</h4>
      <img src={image} alt={name} width="200" heigth="200" />
      <span className={s.text}>{price}</span>
      <span className={s.text}>{description}</span>
    </Link>
    <hr />
    <footer className={s.footer}>
      <button className={s.button} onClick={onDelete}>
        Delete
      </button>
      <button className={s.button} onClick={onAddToCart}>
        Add to Cart
      </button>
    </footer>
  </div>
);

export default withRouter(Contact);
