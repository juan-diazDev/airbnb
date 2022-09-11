import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './styles.scss';

const Price = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);

  const [price, setPrice] = useState(0);
  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, price } });
    if (price !== 0) {
      navigate('/preview');
    } else {
      swal({
        title: 'Error!',
        text: 'Price has to be bigger than 0',
        icon: 'error',
        button: 'Close',
      });
    }
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
          <Link to="/">
            <button className="header__save" type="button">
              Exit
            </button>
          </Link>
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
              <input
                name="price"
                onChange={handleChange}
                className="offerprice"
                type="number"
                value={price}
                min="1"
                step="any"
              />
            </div>
            <div className="option__pernight">
              <h2 className="pernight__description">Per night</h2>
            </div>
            <div className="option__advice">
              <p className="advice__description">
                <span>Warning!</span>
                <br />
                We want to remaind you that this price
                you are giving is per night and not per person.
                <br />
                That means that you are charging for the complete hosting.
              </p>
            </div>
          </div>
        </div>
        <div className="container__button-step">
          <div className="progress8" />
          <Link to="/description">
            <button className="button__backstep" type="button">
              Back
            </button>
          </Link>
          <button onClick={handleNext} className="button__nextstep" type="button">
            Review your listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
