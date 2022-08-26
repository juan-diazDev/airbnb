import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Price = () => {
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
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
          <div className="option__offerprice">
            <button onClick={handleDecrement} className="offerprice__low" type="button">-</button>
            <div className="offerprice__input">
              <div className="offerprice" placeholder="$179043" type="text">{quantity}
              </div>
              <button onClick={handleIncrement} className="offerprice__rise" type="button">+</button>
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
            <button className="button__nextstep" type="button">
              Review your listing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Price;
