import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './styles.scss';

const PrivacyType = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);
  const [privacyType, setPrivacyType] = useState('');

  const handleClick = (e) => {
    setPrivacyType(e.target.value);
  };

  const handleNext = () => {
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, privacyType } });
    if (privacyType !== '') {
      navigate('/location');
    } else {
      swal({
        title: 'Error!',
        text: 'You have to choose one option',
        icon: 'error',
        button: 'Choose!',
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
              src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662837/images/LogoIcon/White_r831ni.png"
              alt="airbnbLogo"
            />
          </Link>
        </div>
        <div className="header__help-container">
          <button className="header__help" type="button">
            Help
          </button>
          <Link to="/">
            <button className="header__save" type="button">
              Exit
            </button>
          </Link>
        </div>
      </div>
      <div className="container__question1">
        <h1 className="question__title">What kind of space will your guest have?</h1>
      </div>
      <div className="container__options-fixed1">
        <div className="container__options-scroll1">
          <button name="privacyTypeType" className="option" type="button" onClick={handleClick} value="ENTIRE_PLACE">An entire place.</button>
          <button name="privacyTypeType" className="option" type="button" onClick={handleClick} value="PRIVATE_ROOM">A private room.</button>
          <button name="privacyTypeType" className="option" type="button" onClick={handleClick} value="SHARED_ROOM">A shared room.</button>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress1" />
        <Link to="/property-type-group">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <button onClick={handleNext} className="button__nextstep" type="button">
          Next
        </button>
      </div>
    </>
  );
};

export default PrivacyType;
