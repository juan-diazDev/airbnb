import PropTypes from 'prop-types';
import { useState } from 'react';
import { deleteSpace } from '../../../services/spaces';
import Modal from './Modal';

const CardSpaceOffert = ({ space }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      const deleted = await deleteSpace(space._id);

      if (deleted) {
        close();
      }
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="host__mainSection">
        <div className="card__image-container">
          <div>
            <img className="card__image__image" src={space.img[0]} alt={space.title} />
            <button className="card__delete__button" type="button" onClick={() => setIsOpen(true)}>
              X
            </button>
          </div>
        </div>
        <div className="info-container">
          <div className="card__title"><b>{space.title}</b></div>
          <p className="card__description">{space.description}</p>
          <div className="card__price"> ${space.price} <span>night</span></div>
        </div>
      </div>

      <Modal open={isOpen}>
        <button type="button" className="modal__close__button" onClick={close}><strong>X</strong></button>
        <h2>Are u sure?</h2>
        <p>Do you really want to delete this space?</p>
        <button className="modal__button" type="button" onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
};

CardSpaceOffert.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpaceOffert;
