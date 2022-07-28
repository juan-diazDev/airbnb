import { Link } from 'react-router-dom';
import './styles.scss';

const FormContainerDescriptionPlace = () => (
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
        <h1 className="question__title">Now, let’s describe your place</h1>
      </div>

      <div className="container__options">
        <div className="option__offerdescription">
          <h2 className="offerdescription">Create your description</h2>
          <textarea
            className="offerdescription__text"
            placeholder="This place is the best in the world."
            rows="3"
          />
        </div>

        <div className="container__button-step">
          <Link to="/FormContainerTitle">
            <button className="button__backstep" type="button">Back</button>
          </Link>
          <Link to="/FormcontainerPrice">
            <button className="button__nextstep" type="button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FormContainerDescriptionPlace;
