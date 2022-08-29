/* eslint-disable max-len */
/* disable-eslint */
import { useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

const FloorPlan = () => {
  const navigate = useNavigate();
  const [floorPlanState, setFloorPlanState] = useState({
    guest: 1, beds: 1, bedrooms: 1, bathrooms: 1,
  });

  const dispatch = useDispatch();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);

  const handleDecrement = (e) => {
    if (floorPlanState[e.target.name] > 0) {
      setFloorPlanState({ ...floorPlanState, [e.target.name]: floorPlanState[e.target.name] - 1 });
    }
  };
  const handleIncrement = (e) => {
    setFloorPlanState({ ...floorPlanState, [e.target.name]: floorPlanState[e.target.name] + 1 });
  };

  const handleNext = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, floorPlanState } });
    navigate('/Amenities');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <form onSubmit={handleSubmit} className="container__options-scroll3">
          <div className="option__card2">
            <h2 className="option__card-title2">Guest</h2>
            <div className="option__card-features">
              <button name="guest" onClick={handleDecrement} className="card_button-decrease" type="button">-</button>
              <input name="guest" value={floorPlanState.guest} className="card_number-guest" />
              <button name="guest" onClick={handleIncrement} className="card_button-increase" type="button">+</button>
            </div>
          </div>
          <div className="option__card2">
            <h2 className="option__card-title2">Beds</h2>
            <div className="option__card-features">
              <button name="beds" onClick={handleDecrement} className="card_button-decrease" type="button">-</button>
              <input name="beds" value={floorPlanState.beds} className="card_number-beds" />
              <button name="beds" onClick={handleIncrement} className="card_button-increase" type="button">+</button>
            </div>
          </div>
          <div className="option__card2">
            <h2 className="option__card-title2">Bedrooms</h2>
            <div className="option__card-features">
              <button name="bedrooms" onClick={handleDecrement} className="card_button-decrease" type="button">-</button>
              <input name="bedrooms" value={floorPlanState.bedrooms} className="card_number-bedrooms" />
              <button name="bedrooms" onClick={handleIncrement} className="card_button-increase" type="button">+</button>
            </div>
          </div>
          <div className="option__card2">
            <h2 className="option__card-title2">Bathrooms</h2>
            <div className="option__card-features">
              <button name="bathrooms" onClick={handleDecrement} className="card_button-decrease" type="button">-</button>
              <input name="bathrooms" value={floorPlanState.bathrooms} className="card_number-bathrooms" />
              <button name="bathrooms" onClick={handleIncrement} className="card_button-increase" type="button">+</button>
            </div>
          </div>
        </form>
      </div>
      <div className="container__button-step">
        <div className="progress3" />
        <Link to="/Location">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <button onClick={handleNext} className="button__nextstep" type="button">
          Next
        </button>
      </div>
    </div>
  );
};

export default FloorPlan;
