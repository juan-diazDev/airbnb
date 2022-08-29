/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';
import { sectionAmenities } from './sectionAmenities';
import AmenitiesButton from './AmenitiesButton';

const Amenities = () => {
  const navigate = useNavigate();

  const [amenitie, setAmenitie] = useState({
    Kitchen: [], Bathroom: [], 'Bedroom and loundry': [], Entertainment: [],
  });
  const handleAmenitie = (e, section) => {
    console.log(e.target.value, section);
    setAmenitie({ ...amenitie, [section]: [...amenitie[section], e.target.value] });
    console.log(amenitie);
  };

  const handleNext = () => {
    navigate('/Images');
  };
  return (
    <div>
      <div className="form__header4">
        <div className="header__logo">
          <Link to="/">
            <img
              className="logo__img"
              src="img/LogoIcon/White.png"
              alt="airbnbLogo"
            />
          </Link>
        </div>
        <div className="header__help-container4">
          <button className="header__help" type="button">
            Help
          </button>
          <button className="header__save" type="button">
            Save and exit
          </button>
        </div>
      </div>
      <div className="container__question4">
        <h1 className="question__title">
          Let guest know what your place has to offer
        </h1>
      </div>
      <div className="container__options-fixed4">
        <div className="container__options-scroll4">
          {sectionAmenities.map((section) => {
            return (
              <>
                <div className="addition__question">
                  <h2 className="question__addtitle">{section.section}</h2>
                </div>
                <div className="add_included-options">
                  {section.buttons.map((button) => {
                    return (
                      <AmenitiesButton onUpdate={(e, section2) => handleAmenitie(e, section2)} section={section.section} button={button} />
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress4" />
        <Link to="/FloorPlan">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <Link to="/Images">
          <button onClick={handleNext} className="button__nextstep" type="button">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Amenities;
