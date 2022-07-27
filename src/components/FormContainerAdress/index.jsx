import { Link } from 'react-router-dom';
import './styles.scss';

const FormContainerAdress = () => (
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
        <h2 className="question__title">Confirm your adress</h2>
      </div>

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

        <div className="container__button-step">
          <Link to="/FormContainerCapacity">
            <button className="button__backstep" type="button">Back</button>
          </Link>
          <Link to="/FormContainerFeatures">
            <button className="button__nextstep" type="button">Next</button>
          </Link>
        </div>
      </form>
    </div>
  </div>
);

export default FormContainerAdress;
