import { Link } from 'react-router-dom';
import './styles.scss';

const FormContainerCapacity = () => (
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
          What kind of space will your guest have?
        </h1>
      </div>

      <div className="container__options">
        <button className="option" type="button">An entire place.</button>
        <button className="option" type="button">A private room.</button>
        <button className="option" type="button">A shared room.</button>

        <div className="container__button-step">
          <Link to="/FormContainerDescribe">
            <button className="button__backstep" type="button">Back</button>
          </Link>
          <Link to="/FormContainerAdress">
            <button className="button__nextstep" type="button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FormContainerCapacity;
