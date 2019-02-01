import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Contact from '../Contact/Contact';

import * as s from './ContactsList.module.css';

const ContactsList = ({ contacts = [], match, location, deleteContact }) => (
  <ul className={s.container}>
    {contacts.map(contact => (
      <li key={contact.id}>
        <Link
          to={{
            pathname: `${match.url}/${contact.id}`,
            state: { from: location },
          }}
        >
          <Contact
            key={contact.id}
            {...contact}
            onDelete={() => deleteContact(contact.id)}
          />
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ContactsList);
