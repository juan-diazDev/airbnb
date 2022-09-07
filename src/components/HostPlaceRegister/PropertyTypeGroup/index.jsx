import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './styles.scss';

const PropertyTypeGroup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);
  const [propertyType, setPropertyType] = useState('');

  const handleClick = (e) => {
    setPropertyType(e.target.value);
  };

  const handleNext = () => {
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, propertyType } });

    if (propertyType !== '') {
      navigate('/PrivacyType');
    } else {
      swal({
        title: 'Error!',
        text: 'Your user or password  is invalid',
        icon: 'error',
        button: 'Try again',
      });
    }
  };

  return (
    <>
      <div className="form__header">
        <div className="header__logo">
          <Link to="/">
            <img
              className="logo__img"
              src="img/LogoIcon/White.png"
              alt="airbnbLogo"
            />
          </Link>
        </div>
        <div className="header__help-container">
          <button className="header__help" type="button">
            Help
          </button>
          <button className="header__save" type="button">
            Save and exit
          </button>
        </div>
      </div>
      <div className="container__question">
        <h1 className="question__title">What kind of place will you host?</h1>
      </div>
      <div className="container__options-fixed">
        <div className="container__options-scroll">
          <button className="option__card0" type="button" name="type" value="APARTMENT" title="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660015365/images/Amenities/PropertyTypeGroup/Apartament_p4bwb6.png" onClick={handleClick}>
            <h2 className="option__card-title0">Apartment</h2>
            <img
              className="option__card-image0"
              src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660015365/images/Amenities/PropertyTypeGroup/Apartament_p4bwb6.png"
              alt="Apartament"
            />
          </button>
          <button className="option__card0" type="button" name="type" value="HOUSE" onClick={handleClick}>
            <h2 className="option__card-title0">House</h2>
            <img
              className="option__card-image0"
              src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660015567/images/Amenities/PropertyTypeGroup/House_xrdon4.png"
              alt="House"
            />
          </button>
          <button className="option__card0" type="button" name="type" value="BED_AND_BREAKFAST" onClick={handleClick}>
            <h2 className="option__card-title0">Bed and breakfasts</h2>
            <img
              className="option__card-image0"
              src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660015365/images/Amenities/PropertyTypeGroup/BedAndBreakFast_lq2zxo.png"
              alt="BedAndBreakFast"
            />
          </button>
          <button className="option__card0" type="button" name="type" value="RANCH" onClick={handleClick}>
            <h2 className="option__card-title0">Ranch</h2>
            <img
              className="option__card-image0"
              src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1660015542/images/Amenities/PropertyTypeGroup/Ranch_cqiayn.png"
              alt="Ranch"
            />
          </button>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress" />
        <Link to="/">
          <button className="button__backhome" type="button">
            Back to Home
          </button>
        </Link>
        <button
          onClick={handleNext}
          className="button__nextstep"
          type="button"
        >
          Next
        </button>
      </div>
    </>
  );
};
export default PropertyTypeGroup;
