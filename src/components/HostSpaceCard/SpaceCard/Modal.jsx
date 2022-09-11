import ReactDom from 'react-dom';
import PropType from 'prop-types';
import React from 'react';
import './modalStyles.scss';

const Modal = ({ open, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <main className="modal">
      <section className="modal__warning">
        {children}
      </section>
    </main>,
    document.getElementById('portal'),
  );
};

Modal.propTypes = {
  children: PropType.node.isRequired,
  open: PropType.bool.isRequired,
};

export default Modal;
