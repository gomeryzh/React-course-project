import React from 'react';
import * as s from './Backdrop.module.css';

const Backdrop = ({ children }) => <div className={s.Backdrop}>{children}</div>;

export default Backdrop;
