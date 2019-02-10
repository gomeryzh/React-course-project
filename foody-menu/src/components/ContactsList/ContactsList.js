import React from 'react';

import Contact from '../Contact/Contact';

import * as s from './ContactsList.module.css';

const ContactsList = ({ contacts = [], deleteContact, addToCart }) => (
  <ul className={s.container}>
    {contacts.map(contact => (
      <li key={contact.id}>
        <Contact
          key={contact.id}
          id={contact.id}
          {...contact}
          onDelete={() => deleteContact(contact.id)}
          onAddToCart={() => addToCart(contact.id)}
        />
      </li>
    ))}
  </ul>
);

export default ContactsList;
