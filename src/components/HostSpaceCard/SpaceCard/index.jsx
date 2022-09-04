/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteSpace } from '../../../services/spaces';

const CardSpaceOffert = ({ space }) => {
  const navigate = useNavigate();
  const idSpace = space._id;
  console.log(idSpace);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteSpace(idSpace);
      window.location.reload(false);
      navigate('/HostSpacesAdmin');
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
        <img src={space.img[0]} alt={space.title} />
      </div>
      <div>
        <Link to="https://www.google.com.co/">
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
