import { Link } from 'react-router-dom';
import './styles.scss';

const FormContainerFeatures = () => (
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

      <div className="header__buttons">
        <button className="button" type="button">Ask a Superhost</button>
        <button className="button" type="button">Help</button>
      </div>
    </div>

    <div className="form__container">
      <div className="container__question">
        <h1 className="question__title">
          How many guest would you like to welcome?
        </h1>
      </div>

      <div className="container__options">
        <div className="option__card2">
          <h2 className="option__card-title2">Guest</h2>
          <div className="option__card-features">
            <button className="card_button-increase" type="button">-</button>
            <p className="card_number-guest">0</p>
            <button className="card_button-decrease" type="button">+</button>
          </div>
        </div>
        <div className="option__card2">
          <h2 className="option__card-title2">Beds</h2>
          <div className="option__card-features">
            <button className="card_button-increase" type="button">-</button>
            <p className="card_number-beds">0</p>
            <button className="card_button-decrease" type="button">+</button>
          </div>
        </div>
        <div className="option__card2">
          <h2 className="option__card-title2">Bedrooms</h2>
          <div className="option__card-features">
            <button className="card_button-increase" type="button">-</button>
            <p className="card_number-bedrooms">0</p>
            <button className="card_button-decrease" type="button">+</button>
          </div>
        </div>
        <div className="option__card2">
          <h2 className="option__card-title2">Bathrooms</h2>
          <div className="option__card-features">
            <button className="card_button-increase" type="button">-</button>
            <p className="card_number-bathrooms">0</p>
            <button className="card_button-decrease" type="button">+</button>
          </div>
        </div>

        <div className="container__button-step">
          <Link to="/FormContainerAdress">
            <button className="button__backstep" type="button">Back</button>
          </Link>
          <Link to="/FormContainerAdditions">
            <button className="button__nextstep" type="button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FormContainerFeatures;
