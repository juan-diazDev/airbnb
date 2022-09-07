/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-constant-condition */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import amenitiesObj from './sectionAmenities';
import AmenitiesButton from './AmenitiesButton';

const Amenities = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const spaceRegister = useSelector((state) => state.space.spaceRegister);
  const [amenitie, setAmenitie] = useState({
    Kitchen: [], Bathroom: [], 'Bedroom and loundry': [], Facilities: [], Entertainment: [],
  });
  const handleAmenitie = (e, sectionName) => {
    if (!!amenitie[sectionName].find((element) => element === e.target.value)) {
      console.log('El elemento existe');
      // Encontrar el index del elemento que quiero eliminar.
      const indexAmenitie = amenitie[sectionName].indexOf(e.target.value);
      // Utilizar el metodo splice con las variables encontradas para eliminar dicha posicion.
      const amanitieRemoved = amenitie[sectionName].splice(indexAmenitie, 1);
      console.log('Amenidad removida:', amanitieRemoved);
      setAmenitie({ ...amenitie, [sectionName]: [...amenitie[sectionName]] });
      console.log('Arreglo final a mandar:.', amenitie);
      // Por ultimo guardar el nuevo array en el estado correctamente.
    } else {
      setAmenitie({ ...amenitie, [sectionName]: [...amenitie[sectionName], e.target.value] });
    }
    console.log(!!amenitie[sectionName].find((element) => element === e.target.value), amenitie[sectionName]);
  };

  const handleNext = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, amenitie } });
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
          {amenitiesObj.map((section) => {
            return (
              <>
                <div className="addition__question">
                  <h2 className="question__addtitle">{section.section}</h2>
                </div>
                <div className="add_included-options">
                  {section.buttons.map((button) => {
                    return (
                      <AmenitiesButton onUpdate={(e, sectionName, icon) => handleAmenitie(e, sectionName, icon)} section={section.section} button={button} />
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
