import React from 'react';
import * as s from './ContactsFilter.module.css';

const ContactsFilter = ({ value = '', onChange = () => null }) => (
  <input
    className={s.input}
    value={value}
    onChange={e => onChange(e.target.value)}
    type="text"
    placeholder="Search..."
  />
);

export default ContactsFilter;
