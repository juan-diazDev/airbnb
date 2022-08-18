import { Link } from 'react-router-dom';
import './styles.scss';

const Location = () => (
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
    <div className="container__question2">
      <h1 className="question__title">Confirm your adress</h1>
    </div>
    <div className="container__options-fixed2">
      <div className="container__options-scroll2">
        <form className="container__formtable">
          <input className="form__text1" placeholder="Street" type="text" />
          <input
            className="form__text"
            placeholder="Apt, suite,etc.(Optional)"
            type="text"
          />
          <input className="form__text" placeholder="City" type="text" />
          <input
            className="form__text"
            placeholder="State(Optional)"
            type="text"
          />
          <input
            className="form__text"
            placeholder="Zip code(optional)"
            type="text"
          />
          <select className="form__countries">
            <option className="country">Country</option>
            <option className="country">Colombia</option>
            <option className="country">Ecuador</option>
            <option className="country">Chile</option>
          </select>
        </form>
      </div>
    </div>
    <div className="container__button-step">
      <div className="progress2" />
      <Link to="/PrivacyType">
        <button className="button__backstep" type="button">
          Back
        </button>
      </Link>
      <Link to="/FloorPlan">
        <button className="button__nextstep" type="button">
          Next
        </button>
      </Link>
    </div>
  </div>
);

export default Location;
