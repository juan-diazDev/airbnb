import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AmenitiesButton = ({ button, onUpdate, section }) => {
  const [checkBool, setCheckBool] = useState(false);
  const handleSelect = (e) => {
    onUpdate(e, section, button.icon);
    setCheckBool(!checkBool);
  };

  return (
    <button name={button.amenitie} value={button.amenitie} onClick={handleSelect} className={!checkBool ? 'option__card3' : 'option__card3--focus'} type="button">
      <img
        className="adition-icon"
        src={button.icon}
        alt={button.alt}
      />
      {button.amenitie}
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
