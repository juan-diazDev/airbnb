/* eslint-disable max-len */
import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const FloorPlan = () => {
  const [FPlan, setFPlan] = useState({});
  console.log(FPlan);
  const [guest, setGuest] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const handleChange = (e) => {
    setFPlan({ ...FPlan, [e.target.name]: e.target.value });
  };
  const handleDecrementGuest = () => {
    if (guest > 1) {
      setGuest((prevCountGuest) => prevCountGuest - 1);
    }
  };

  const handleIncrementGuest = () => {
    setGuest((prevCountGuest) => prevCountGuest + 1);
  };

  const handleDecrementBeds = () => {
    if (beds > 1) {
      setBeds((prevCount) => prevCount - 1);
    }
  };

  const handleIncrementBeds = () => {
    setBeds((prevCount) => prevCount + 1);
  };

  const handleDecrementBedrooms = () => {
    if (bedrooms > 1) {
      setBedrooms((prevCount) => prevCount - 1);
    }
  };

  const handleIncrementBedrooms = () => {
    setBedrooms((prevCount) => prevCount + 1);
  };

  const handleDecrementBathrooms = () => {
    if (bathrooms > 1) {
      setBathrooms((prevCount) => prevCount - 1);
    }
  };

  const handleIncrementBathrooms = () => {
    setBathrooms((prevCount) => prevCount + 1);
  };

  const handleNext = () => {
    window.localStorage.setItem('essentialsNumber', (FPlan));
  };
  return (
    <div>
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
      <div className="container__question3">
        <h1 className="question__title">How many guest would you like to welcome?</h1>
      </div>
      <div className="container__options-fixed3">
        <div className="container__options-scroll3">
          <div className="option__card2">
            <h2 className="option__card-title2">Guest</h2>
            <div className="option__card-features">
              <button onClick={handleDecrementGuest} className="card_button-decrease" type="button">-</button>
              <input name="guest" onChange={handleChange} value={guest} className="card_number-guest" />
              <button onClick={handleIncrementGuest} className="card_button-increase" type="button">+</button>
            </div>
          </div>
          <div className="option__card2">
            <h2 className="option__card-title2">Beds</h2>
            <div className="option__card-features">
              <button onClick={handleDecrementBeds} className="card_button-decrease" type="button">-</button>
              <input name="beds" onChange={handleChange} value={beds} className="card_number-beds" />
              <button onClick={handleIncrementBeds} className="card_button-increase" type="button">+</button>
            </div>
          </div>
          <div className="option__card2">
            <h2 className="option__card-title2">Bedrooms</h2>
            <div className="option__card-features">
              <button onClick={handleDecrementBedrooms} className="card_button-decrease" type="button">-</button>
              <input name="bedrooms" onChange={handleChange} value={bedrooms} className="card_number-bedrooms" />
              <button onClick={handleIncrementBedrooms} className="card_button-increase" type="button">+</button>
            </div>
          </div>
          <div className="option__card2">
            <h2 className="option__card-title2">Bathrooms</h2>
            <div className="option__card-features">
              <button onClick={handleDecrementBathrooms} className="card_button-decrease" type="button">-</button>
              <input name="bathrooms" onChange={handleChange} value={bathrooms} className="card_number-bathrooms" />
              <button onClick={handleIncrementBathrooms} className="card_button-increase" type="button">+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress3" />
        <Link to="/Location">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <Link to="/Amenities">
          <button onClick={handleNext} className="button__nextstep" type="button">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FloorPlan;
