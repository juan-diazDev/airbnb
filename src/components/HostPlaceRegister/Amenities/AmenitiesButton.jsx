import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AmenitiesButton = ({ button }) => {
  const [checkBool, setCheckBool] = useState(false);
  const handleSelect = () => {
    setCheckBool(!checkBool);
  };
  return (
    <button onClick={handleSelect} className={!checkBool ? 'option__card3' : 'option__card3--focus'} type="button">
      <div className="option__card-adition">
        <img
          className="adition-icon"
          src={button.icon}
          alt={button.alt}
        />
      </div>
      <h2 className="option__card-title3">{button.amenitie}</h2>
    </button>
  );
};

AmenitiesButton.propTypes = {
  button: PropTypes.shape({
    amenitie: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

export default AmenitiesButton;
