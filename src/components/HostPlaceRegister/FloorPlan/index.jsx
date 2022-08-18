import { Link } from 'react-router-dom';
import './styles.scss';

const FloorPlan = () => (
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
            <button className="card_button-decrease" type="button">-</button>
            <p className="card_number-guest">0</p>
            <button className="card_button-increase" type="button">+</button>
          </div>
        </div>
        <div className="option__card2">
          <h2 className="option__card-title2">Beds</h2>
          <div className="option__card-features">
            <button className="card_button-decrease" type="button">-</button>
            <p className="card_number-beds">0</p>
            <button className="card_button-increase" type="button">+</button>
          </div>
        </div>
        <div className="option__card2">
          <h2 className="option__card-title2">Bedrooms</h2>
          <div className="option__card-features">
            <button className="card_button-decrease" type="button">-</button>
            <p className="card_number-bedrooms">0</p>
            <button className="card_button-increase" type="button">+</button>
          </div>
        </div>
        <div className="option__card2">
          <h2 className="option__card-title2">Bathrooms</h2>
          <div className="option__card-features">
            <button className="card_button-decrease" type="button">-</button>
            <p className="card_number-bathrooms">0</p>
            <button className="card_button-increase" type="button">+</button>
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
        <button className="button__nextstep" type="button">
          Next
        </button>
      </Link>
    </div>
  </div>
);

export default FloorPlan;
