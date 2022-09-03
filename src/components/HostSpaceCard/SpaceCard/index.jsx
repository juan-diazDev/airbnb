import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardSpaceOffert = ({ space }) => (
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
      <button type="button">
        Delete
      </button>
    </div>
  </>
);

CardSpaceOffert.propTypes = {
  space: PropTypes.shape().isRequired,
};

export default CardSpaceOffert;
