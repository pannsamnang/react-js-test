import React from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const Modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClose} />
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? 1 : 0
      }}
      className="modal">
      {props.children}
    </div>
  </Aux>
)

export default Modal;