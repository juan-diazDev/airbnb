/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteSpace } from '../../../services/spaces';

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
    <>
      <div className="Card_space">
        <h1>
          {space.title}
        </h1>
        <div className="space_img_container" />
        <img src={space?.img[0]} alt={space?.title} />
      </div>
      <div>
        <Link onClick={handlerEdit} to="/HostEditSpace">
          <button type="button">
            Edit
          </button>
        </Link>
        <button type="button" onClick={handlerSubmit}>
          Delete
        </button>
      </div>
    </>
  );
};

CardSpaceOffert.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpaceOffert;
