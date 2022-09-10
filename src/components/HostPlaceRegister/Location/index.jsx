import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import swal from 'sweetalert';

const Location = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [address, setAddress] = useState({});
  const spaceRegister = useSelector((state) => state.space.spaceRegister);
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    dispatch({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, address } });
    if (address !== {}) {
      navigate('/floor-plan');
    } else {
      swal({
        title: 'Error!',
        text: 'Please enter your address',
        icon: 'error',
        button: 'Close',
      });
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="form__header4">
        <div className="header__logo">
          <Link to="/">
            <img
              className="logo__img"
              src="img/LogoIcon/White.png"
              alt="airbnbLogo"
            />
          </Link>
        </div>
        <div className="header__help-container4">
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
      <div className="container__question2">
        <h1 className="question__title">Confirm your address</h1>
      </div>
      <div className="container__options-fixed2">

        <div className="container__options-scroll2">

          <form onSubmit={handlerSubmit} className="container__formtable">
            <input name="street" className="form__text1" placeholder="Street" type="text" onChange={handleChange} />
            <input
              name="placeType"
              className="form__text"
              placeholder="Apt, suite,etc.(Optional)"
              type="text"
              onChange={handleChange}
            />
            <input name="city" className="form__text" placeholder="City" type="text" onChange={handleChange} />
            <input
              name="state"
              className="form__text"
              placeholder="State(Optional)"
              type="text"
              onChange={handleChange}
            />
            <input
              name="zipCode"
              className="form__text"
              placeholder="Zip code(optional)"
              type="text"
              onChange={handleChange}
            />
            <select name="country" className="form__countries" onChange={handleChange}>
              <option className="country">Country</option>
              <option value="Colombia" className="Country">Colombia</option>
              <option value="Ecuador" className="country">Ecuador</option>
              <option value="Chile" className="country">Chile</option>
            </select>
          </form>
        </div>
      </div>
      <div className="container__button-step">
        <div className="progress2" />
        <Link to="/privacy-type">
          <button className="button__backstep" type="button">
            Back
          </button>
        </Link>
        <button onClick={handleNext} className="button__nextstep" type="button">
          Next
        </button>
      </div>
    </>
  );
};

export default Location;
