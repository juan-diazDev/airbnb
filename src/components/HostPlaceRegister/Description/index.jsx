import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Description = () => {
  const [Descripcion, setDescripcion] = useState();
  const handleChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleNext = () => {
    window.localStorage.setItem('Description', JSON.stringify(Descripcion));
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
        <h1 className="question__title">
          How many guest would you like to welcome?
        </h1>
      </div>
      <div className="container__options-fixed3">
        <div className="container__options-scroll3">
          <div className="option__offerdescription">
            <h2 className="offerdescription">Create your description</h2>
            <textarea
              onChange={handleChange}
              className="offerdescription__text"
              placeholder="This place is the best in the world."
              rows="3"
            />
          </div>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress7" />
        <Link to="/Title">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <Link to="/Price">
          <button onClick={handleNext} className="button__nextstep" type="button">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Description;
