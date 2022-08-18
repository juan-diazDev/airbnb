import { Link } from 'react-router-dom';
import './styles.scss';

const Title = () => (
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
      <h1 className="question__title">
        How many guest would you like to welcome?
      </h1>
    </div>
    <div className="container__options-fixed3">
      <div className="container__options-scroll3">
        <div className="option__offertitle">
          <h2 className="offertitle">Create your title</h2>
          <textarea
            className="offertitle__text"
            placeholder="cheerful 3 bedrooms house with pool"
            rows="3"
          />
        </div>
      </div>
    </div>
    <div className="container__button-step">
      <div className="progress6" />
      <Link to="/Images">
        <button className="button__backstep" type="button">
          Back
        </button>
      </Link>
      <Link to="/Description">
        <button className="button__nextstep" type="button">
          Next
        </button>
      </Link>
    </div>
  </div>
);

export default Title;
