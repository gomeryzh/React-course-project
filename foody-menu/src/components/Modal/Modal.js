import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from './Button';
import Backdrop from './Backdrop';
import * as s from './Modal.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
};

export default class Modal extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.addContact({ ...this.state }));

    this.reset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { onClose, isOpen } = this.props;
    return (
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames={{
          enterActive: s.BackdropEnter,
          exitActive: s.BackdropExit,
        }}
      >
        {state => (
          <Backdrop>
            <CSSTransition
              in={state === 'entered'}
              timeout={{ enter: 400, exit: 300 }}
              unmountOnExit
              classNames={{
                enterActive: s.ModalEnter,
                exitActive: s.ModalExit,
              }}
            >
              <form
                className={s.Modal}
                onSubmit={this.handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 400,
                  padding: 16,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxShadow:
                    '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
                }}
              >
                <input
                  className={s.input}
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <input
                  className={s.input}
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />

                <input
                  className={s.input}
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />

                <span class="border" />

                <footer className={s.footer}>
                  <button type="submit" className={s.button}>
                    Add Contact
                  </button>

                  <Button label="Close" onClick={onClose} />
                </footer>
              </form>
            </CSSTransition>
          </Backdrop>
        )}
      </CSSTransition>
    );
  }
}
