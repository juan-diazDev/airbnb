import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './styles.scss';

const Description = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceRegister = useSelector((state) => state.space.spaceRegister);
  const [description, setDescripcion] = useState('');

  const handleChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleNext = () => {
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, description } });
    if (description !== '') {
      navigate('/Price');
    } else {
      swal({
        title: 'Error!',
        text: 'You have to add a descrption',
        icon: 'error',
        button: 'Add it!',
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
          Now, let’s describe your place
        </h1>
      </div>
      <div className="container__options-fixed3">
        <div className="container__options-scroll3">
          <div className="option__offerdescription">
            <h2 className="offerdescription">Create your description</h2>
            <textarea
              onChange={handleChange}
              className="offerdescription__text"
              placeholder="This is the best place in the world."
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
        <button onClick={handleNext} className="button__nextstep" type="button">
          Next
        </button>
      </div>
    </div>
  );
};
export default Description;
