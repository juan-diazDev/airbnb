import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AmenitiesButton = ({ button, onUpdate, section }) => {
  const [checkBool, setCheckBool] = useState(false);
  const handleSelect = (e) => {
    onUpdate(e, section);
    setCheckBool(!checkBool);
  };

  return (
    <button name={button.amenitie} value={button.amenitie} onClick={handleSelect} className={!checkBool ? 'option__card3' : 'option__card3--focus'} type="button">
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
  onUpdate: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  button: PropTypes.shape({
    amenitie: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

export default AmenitiesButton;
