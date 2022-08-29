import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

const Price = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);

  const [price, setPrice] = useState({});
  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, price } });
    navigate('/Preview');
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
          Now, for the fun part, set your price
        </h1>
      </div>
      <div className="container__options-fixed3">
        <div className="container__options-scroll3">
          <div className="option__offerprice">
            <div className="offerprice__input">
              <input name="price" onChange={handleChange} className="offerprice" placeholder="$179043" type="number" value={price} />
            </div>
            <div className="option__pernight">
              <h2 className="pernight__description">Per night</h2>
            </div>
            <div className="option__advice">
              <h2 className="advice__description">
                Places like yours usually range from $125,878 to $209,796.
              </h2>
            </div>
          </div>
        </div>
        <div className="container__button-step">
          <div className="progress8" />
          <Link to="/Description">
            <button className="button__backstep" type="button">
              Back
            </button>
          </Link>
          <Link to="/Preview">
            <button onClick={handleNext} className="button__nextstep" type="button">
              Review your listing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Price;
