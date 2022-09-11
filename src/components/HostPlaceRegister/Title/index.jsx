import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './styles.scss';

const Title = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);

  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNext = () => {
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, title } });
    if (title !== '') {
      navigate('/description');
    } else {
      swal({
        title: 'Error!',
        text: 'You have to give a title',
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
              src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662837/images/LogoIcon/White_r831ni.png"
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
          Let’s give your place a name
        </h1>
      </div>
      <div className="container__options-fixed3">
        <div className="container__options-scroll3">
          <div className="option__offertitle">
            <h2 className="offertitle">Create your title</h2>
            <textarea
              onChange={handleChange}
              className="offertitle__text"
              placeholder="Cheerful 3 bedrooms house with pool"
              rows="3"
            />
          </div>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress6" />
        <Link to="/images">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <button onClick={handleNext} className="button__nextstep" type="button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Title;
