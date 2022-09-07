/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteSpace } from '../../../services/spaces';
import './styles.scss';

const CardSpaceOffert = ({ space }) => {
  console.log(space);
  const ID = space._id;
  const handlerEdit = () => {
    localStorage.setItem('_id', ID);
    console.log('Id que necesitas tanto para eliminar como para localstorage:', ID);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteSpace(ID);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="single_card_container">
      <div className="Admin_imgtitle_container">
        <div className="cardAdmin_image-container">
          <img className="cardAdmin_image" src={space?.img[0]} alt={space?.title} />
        </div>
        <h1 className="title_card">
          {space.title}
        </h1>
      </div>
      <div>
        <div className="buttonAdmin_container">
          <Link onClick={handlerEdit} to="/HostEditSpace">
            <button className="buttonAdmin_edit" type="button">
              Edit
            </button>
          </Link>
          <button className="buttonAdmin_delete" type="button" onClick={handlerSubmit}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

CardSpaceOffert.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpaceOffert;
