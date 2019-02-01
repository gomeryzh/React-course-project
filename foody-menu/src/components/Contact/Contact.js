import React from 'react';
import * as s from './Contact.module.css';

const Contact = ({ name, price, image, description, onDelete, category }) => (
  <div className={s.container}>
    <h4>{name}</h4>
    <img src={image} alt={name} width="200" heigth="200" />
    <span className={s.text}>{price}</span>
    <span className={s.text}>{description}</span>

    <hr />
    <footer className={s.footer}>
      <button className={s.button} onClick={onDelete}>
        Delete
      </button>
    </footer>
  </div>
);

export default Contact;
